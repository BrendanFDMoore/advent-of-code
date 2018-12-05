const { input } = require('./input');

const isReaction = (a, b) => Math.abs(b.charCodeAt(0) - a.charCodeAt(0)) === 32

const reaction = seq => {
  let countReactions = 0;
  const result = seq.reduce((acc, cur) => {
    if (acc.length > 0 && isReaction(acc[acc.length-1], cur)) {
      // console.log('react!');
      countReactions++;
      acc.pop();
      return acc;
    }
    // console.log('no react');
    acc.push(cur);
    return acc;
  }, [])
  if (countReactions > 0) return reaction(result);
  return result;
}
const inputArr = [...input];
const finalResult =  reaction(inputArr);
console.log('Result:', finalResult);
console.log('Length:', finalResult.length);

const chars = 'qwertyuiopasdfghjklzxcvbnm';
const charsArr = [...chars];
let minLength = 100000;
let minChar = undefined;
const removeChar = char => arr => arr.filter(e => e.toUpperCase() !== char.toUpperCase())

charsArr.map(c => {
  const tempArr = removeChar(c)(inputArr);
  console.log(tempArr)
  const tempResult = reaction(tempArr);
  console.log({ c, len: tempResult.length})
  if (tempResult.length < minLength) {
    minLength = tempResult.length;
    minChar = c;
  }
});

console.log({minChar, minLength})