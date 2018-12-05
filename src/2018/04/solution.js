const R = require("ramda");

const { input, test } = require("./input");
const sorted = R.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0), input);
// const sorted = R.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0), test);
let guardId = null;
let awake = true;
const parsedData = sorted.map(r => {
  if (r.substr(19, 5) === 'Guard') {
    guardId = parseInt(r.substr(26));
    awake = true;
  } else if (r.substr(19, 5) === 'falls') {
    awake = false;
  } else if (r.substr(19, 5) === 'wakes') {
    awake = true;
  }
  if (guardId === 2753) { 
    console.log({guardId, orig: r.substr(19)})
  }
  const datum = {
    month: parseInt(r.substr(6, 2)),
    day: parseInt(r.substr(9, 2)),
    hour: parseInt(r.substr(12, 2)),
    minute: parseInt(r.substr(15, 2)),
    guard: guardId,
    awake: awake,
    event: r.substr(19, 5),
    original: r.substr(19),
  };
  if (guardId === 2753) { 
    console.log({datum})
  }
  return datum;
});
// console.log(parsedData);

let lastSleepMinute = null;
const guardSleepMinutes = parsedData.reduce((acc, cur) => {
  // console.log(acc);
  if (cur.awake === false) {
    lastSleepMinute = cur.minute;
    return acc;
  }
  if (cur.awake === true && lastSleepMinute) {
    const minutesSlept = cur.minute - lastSleepMinute;
    lastSleepMinute = null;
    return {
      ...acc,
      [cur.guard]: (acc[cur.guard] || 0) + minutesSlept,
    }
  }
  return acc;
}, {})

console.log("Result:", {guardSleepMinutes});

const oneGuardData = parsedData.filter(d => d.guard === 2753)
//console.log("Result:", {oneGuardData});

lastSleepMinute = null;
let lastDay = 0;
const oneGuardSleepMinutes = oneGuardData.reduce((acc, cur) => {
  if (cur.awake === false) {
    lastSleepMinute = cur.minute;
    return acc;
  }
  if (cur.awake === true && lastSleepMinute) {
    const sleepMinutes = R.range(lastSleepMinute, cur.minute);
    lastSleepMinute = null;
    sleepMinutes.map(m => acc[m] = (acc[m]|| 0) + 1);
    return acc;
  }
  return acc;
}, {})

console.log("Result:", {oneGuardSleepMinutes});

