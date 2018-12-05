const { add2 } = require('../../common/utils');
const { input } = require('./input');

const isReaction = (a, b) => Math.abs(b.charCodeAt(0) - a.charCodeAt(0)) === 32

const reaction = seq => {
  let countReactions = 0;
  const result = seq.reduce((acc, cur) => {
    if (acc.length > 0 && isReaction(acc[acc.length-1], cur)) {
      console.log('react!');
      countReactions++;
      acc.pop();
      return acc;
    }
    console.log('no react');
    acc.push(cur);
    return acc;
  }, [])
  if (countReactions > 0) return reaction(result);
  return result;
}

const finalResult =  reaction([...input]);
console.log('Result:', finalResult);
console.log('Length:', finalResult.length);