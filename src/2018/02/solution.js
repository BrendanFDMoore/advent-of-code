const { add2 } = require('../../common/utils');
const { input } = require('./input');

const countLetters = str => [...str].reduce((acc, cur) => ({
  ...acc,
  [cur]: (acc[cur] || 0) + 1
}), {});

const hasTwoOfSomeLetter = cts => Object.values(cts).filter( v=> v===2).length > 0
const hasThreeOfSomeLetter = cts => Object.values(cts).filter( v=> v===3).length > 0
const flagChecksums = str => {
  const letterCounts = countLetters(str);
  return ({
    hasTwo: hasTwoOfSomeLetter(letterCounts),
    hasThree: hasThreeOfSomeLetter(letterCounts),
  })
}

const prepForChecksums = input.map(flagChecksums);

const checksumCounts = prepForChecksums.reduce((acc, cur) => ({
  hasTwo: acc.hasTwo + (cur.hasTwo ? 1 : 0),
  hasThree: acc.hasThree + (cur.hasThree ? 1 : 0),
}), {
  hasTwo: 0,
  hasThree: 0,
});

console.log({checksumCounts});
console.log('Checksum:', checksumCounts.hasThree * checksumCounts.hasTwo);