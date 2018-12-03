console.log('testing');
const { add2 } = require('../../common/utils');
const { input } = require('./input');

const total = input.reduce(add2, 0);
console.log({total});

let runCount = 0;
let tempResults = [0];
let foundDupe = false;
const dupes = [];

while (!foundDupe){
  runCount++;
  console.log("Round:", runCount);
  tempResults = input.reduce(
    (acc, cur) => {
      // console.log({acc, cur});
      const next = add2(acc[acc.length-1], cur);
      // console.log({next});
      if (acc.includes(next)) {
        console.log("Dupe:", next);
        foundDupe = true;
        dupes.push(next);
      }
      return [...acc, next];
    },
    tempResults
  )
}
console.log({runCount, dupes});
