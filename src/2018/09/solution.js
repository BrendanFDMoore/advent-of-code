const R = require("ramda");
const { input } = require('./input');

const PLAYERS = 455;
const LAST_MARBLE = 71223;

let currentPlayer = 1;
const incrementPlayer = () => { currentPlayer = currentPlayer === PLAYERS ? 1 : currentPlayer + 1; }

let scores = {};
const findMaxScore = scoreObj => {
  // console.log(scoreObj)
  // const max = Object.keys(scoreObj).reduce(R.maxBy(p => (scoreObj[p]||0)), 0);
  const max = Object.keys(scoreObj).reduce((acc, cur) => scoreObj[cur]> acc ? scoreObj[cur] : acc, 0)
  return max;
}
// console.log(findMaxScore({ 34: 23, 45: 234, 34: 21}))
let playedMarbles = [0];
let currentMarblePosition = 0;
const getPositionWithOffset = offset => (currentMarblePosition + offset) % playedMarbles.length;
const setCurrentMarblePosition = pos => {currentMarblePosition = pos;}

let nextMarbleNumber = 1;
const incrementMarbleNumber = () => nextMarbleNumber+=1;

const SCORING_MARBLE_MULTIPLE = 23;
const isScoringMarble = marbleNumber => marbleNumber % SCORING_MARBLE_MULTIPLE === 0;
const scorePlayer = (player, points) => {
  console.log({player, points})
  scores[player] = (scores[player] || 0) + points;
}
const removeMarbleAt = position => playedMarbles.splice(position,1);
const insertMarbleAt = (position, newMarble) => playedMarbles.splice(position, 0, newMarble);

const playTurn = () => {
  if (isScoringMarble(nextMarbleNumber)) {
    console.log('Score!');
    const scoringMarbleValue = nextMarbleNumber;
    scorePlayer(currentPlayer, scoringMarbleValue);
    const ccSevenPosition = getPositionWithOffset(-7);
    // console.log({ccSevenPosition})
    const secondScoringValue = playedMarbles[ccSevenPosition]
    scorePlayer(currentPlayer, secondScoringValue);
    removeMarbleAt(ccSevenPosition);
    setCurrentMarblePosition(ccSevenPosition);
  } else {
    const insertPosition = getPositionWithOffset(2);
    insertMarbleAt(insertPosition, nextMarbleNumber);
    setCurrentMarblePosition(insertPosition);
  }
  incrementMarbleNumber();
  incrementPlayer();
}

// while(!targetScoreHit && nextMarbleNumber < LAST_MARBLE*100) {
while(nextMarbleNumber < LAST_MARBLE) {
  console.log(`Player [${currentPlayer}], next marble ${nextMarbleNumber}, Current Marble @ ${currentMarblePosition}`)
  playTurn();
  console.log(`Current Marble @ ${currentMarblePosition}`)
  // console.log(playedMarbles.join(' '))
  // console.log(scores)
  // console.log('Max score:', findMaxScore(scores));
  // console.log(debugLastScore);
}
// console.log(`Player [${currentPlayer}], next marble ${nextMarbleNumber}`)
console.log(`Current Marble @ ${currentMarblePosition}`)
// console.log(playedMarbles.join(' '))

console.log('Max score:', findMaxScore(scores));
// console.log(debugLastScore);

// WRONG
// Current Marble @ 758795
// Max score: 49571769 (TOO HIGH)
// { first: 880808, second: 71223, double: 952031 }

// Player [5], next marble 71222
// Current Marble @ 61356
// Max score: 16149882
// { first: 71208, second: 30790, double: 101998 }

// CORRECT
// layer [242], next marble 71222, Current Marble @ 61354
// Current Marble @ 61356
// Max score: 384288
