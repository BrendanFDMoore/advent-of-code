const R = require("ramda");
const { input } = require('./input');

const alphasort = R.sortBy(R.identity);

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
const order = doNext([first]);
// console.log({order})
console.log(order.join(''))

console.log('Result:', undefined);

// WRONG
// PVJFBDTNLIMWGKHYZEOQRSCAUX
// 
// QAHXCORSEKUGMYIWDZLNBFTJVP
// 
