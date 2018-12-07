const R = require("ramda");
const { input } = require('./input');

const diff = function(a, b) { return a - b; };
const alphasort = R.sortBy(R.identity);
const numsort = R.sort(diff);

const rules = input.map(r =>{
  // const [pre, step] = r.match(/Step ([A-Z]) must be finished before step ([A-Z]) can begin./g);
  const step = r[36];
  const pre = r[5];
  return { step, pre };
})
const letters = 'QWERTYUIOPASDFGHJKLZXCVBNM';
const steps = [...letters];
console.log(rules);
const prerequisites = rules.reduce((acc, cur) => ({
  ...acc,
  [cur.step]: [...(acc[cur.step]||[]), cur.pre],
}), {})
console.log(prerequisites);
console.log(Object.keys(prerequisites).length);
const first = alphasort(steps.filter(s => !Object.keys(prerequisites).includes(s)))[0]
console.log({first});


const doNext = done => {
  console.log('doNext after:', done.join(''));
  const notDone = steps.filter(s => !done.includes(s));
  console.log('notDone:', notDone.join(''));

  if (notDone.length > 0) {
    const possible = notDone.filter(s => {
      console.log({s, pres: prerequisites[s]})
      return R.difference((prerequisites[s]||[]), done).length === 0;
    });
    console.log('possible:', possible)
    const sortedPossible = alphasort(possible);
    console.log('sortedPossible:', sortedPossible)
    const next = alphasort(possible)[0]
    return doNext([ ...done, next]);
  }
  return done;
};
// const order = doNext([first]);
// console.log({order})
// console.log(order.join(''))

// console.log('Result:', undefined);

// WRONG
// PVJFBDTNLIMWGKHYZEOQRSCAUX
// 
// QAHXCORSEKUGMYIWDZLNBFTJVP
// 
const WORKERS = 5
const noPreqs = alphasort(steps.filter(s => !Object.keys(prerequisites).includes(s)))
noPreqs.map(s => prerequisites[s] = []);
console.log(prerequisites);

const timeCost = a => a.charCodeAt(0) - 4;
const doNextWithHelp = (prevDone, workers, tick) => {
  console.log('tick:', tick, 'workers:', workers.join(), 'prevDone:', prevDone.join(''));
  console.log('workers:', workers);
  let done = [...prevDone];
  const justFinishedWorkers = workers.map((w, i) => w.free === tick ? i : null).filter(i => i !== null)
  console.log('justFinishedWorkers:', justFinishedWorkers);
  justFinishedWorkers.map(w => {if (workers[w].job) { done.push(workers[w].job) }})
  console.log('now done:', done.join(''));
  const notDone = steps.filter(s => !done.includes(s));
  console.log('notDone:', notDone.join(''));

  const availableWorkers = workers.map((w, i) => w.free <= tick ? i : null).filter(i => i !== null)
  console.log('availableWorkers:', availableWorkers);
  if (notDone.length > 0 || availableWorkers.length < WORKERS) {
    const nextWorkers = [...workers];
    if (availableWorkers.length > 0){
      const currentJobs = workers.filter(w => !!w.job).map(w => w.job)
      const possibleNext = notDone.filter(s => !currentJobs.includes(s)).filter(s => {
        // console.log({s, pres: prerequisites[s]})
        return R.difference((prerequisites[s]||[]), done).length === 0;
      });
      // console.log('possible:', possible);
      const sortedPossible = alphasort(possibleNext);
      console.log('sortedPossible:', sortedPossible.join(''));
      let starting = [];
      availableWorkers.map(w => {
        if (sortedPossible.length > 0) {
          const next = sortedPossible.shift();
          starting.push(next)
          const cost = timeCost(next)
          console.log('next:', next, 'cost:', cost);
          nextWorkers[w].job = next;
          nextWorkers[w].free = tick + timeCost(next);
        }
      })
      console.log('starting:', starting.join(''));
      console.log('nextWorkers:', nextWorkers);
      // const nextFreeWorker = R.min(nextWorkers.map(w => w.free).filter(v => v > tick));
  
      // return doNextWithHelp(done, nextWorkers, nextFreeWorker);

    } 
    const freetimes = nextWorkers.map(w => w.free).filter(v => v > tick);
    console.log('freetimes:', freetimes.join(','));
    const nextFreeWorkerTime = numsort(freetimes)[0];
    if (!nextFreeWorkerTime) { throw new Error('wtf why')}
    console.log('nextFreeWorkerTime:', nextFreeWorkerTime);
    return doNextWithHelp(done, nextWorkers, nextFreeWorkerTime ? nextFreeWorkerTime : tick + 1);

    // return doNextWithHelp(done, workers, nextFreeWorker);
  }
  return {done, tick};
};
const orderMulti = doNextWithHelp([], [{free: 0},{free: 0},{free: 0},{free: 0},{free: 0}], 0);
// console.log({orderMulti})
console.log(orderMulti.tick)
console.log(orderMulti.done.join(''))

// wrong
// 801, too low
// 1682, too high