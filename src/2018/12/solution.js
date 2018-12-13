const R = require("ramda");
const { initial, rules } = require('./input');

const EXTRAPOTS = 300;
let pots = [...(R.repeat('.', EXTRAPOTS)), ...initial, ...(R.repeat('.', EXTRAPOTS))];

const printPots = () => console.log(pots.join(''))

console.log('Inititial State, Gen 0:')
printPots();

const getNextState = (prevPots, pot) => {
  const neighbourhood = prevPots.substr(pot-2,5);
  // console.log({ neighbourhood, pot });
  const nextState = rules[neighbourhood];
  return nextState;
};
const runGeneration = () => {
  const potsString = pots.join('');
  let nextGen = [...(R.repeat('.', potsString.length))];
  (R.range(2, potsString.length - 2)).map( p => {
    nextGen[p] = getNextState(potsString, p);
  })
  console.log(nextGen.join(''));
  pots = [...nextGen];
}
const sumPots = (potsToSum) => potsToSum.reduce((acc, cur, i) => cur === '#' ? acc+(i-EXTRAPOTS): acc, 0);

const NUMGENS = 200;
(R.range(1, NUMGENS+1)).map( g => {
  console.log({generation: g})
  runGeneration();
  console.log({sum: sumPots(pots)});
})

// Static after 200 gen

// After 200 = 9568, 42 more per gen
// gen 50,000,000,000 = 9568 + 42*(50000000000-200) == 2100000001168
