const R = require("ramda");
const CircularList = require("circular-list");
const { input } = require('./input');

const PLAYERS = 455;
const LAST_MARBLE = 71223;

let scores = {};
const findMaxScore = scoreObj => {
  const max = Object.keys(scoreObj).reduce((acc, cur) => scoreObj[cur]> acc ? scoreObj[cur] : acc, 0)
  return max;
}

const convertCircularListToArray = (list) => {
  let arr = [];
  list.each(d => {
    arr.push(d);
  });
  return arr;
}

let playedMarbles = new CircularList();

var first = new CircularList.Node('0')
var second = new CircularList.Node('1')
playedMarbles.append(first);
playedMarbles.append(second);
let currentMarble = second;

let currentPlayer = 2;
const incrementPlayer = () => { currentPlayer = currentPlayer === PLAYERS ? 1 : currentPlayer + 1; }


let nextMarbleNumber = 2;
const incrementMarbleNumber = () => nextMarbleNumber += 1;

const SCORING_MARBLE_MULTIPLE = 23;
const isScoringMarble = marbleNumber => marbleNumber % SCORING_MARBLE_MULTIPLE === 0;
const scorePlayer = (player, points) => {
  scores[player] = (scores[player] || 0) + points;
}
const removeMarbleAt = position => playedMarbles.removeAt(position);
const insertMarbleAt = (position, newMarble) => {
  // console.log('insertMarbleAt', {position, newMarble})
  playedMarbles.insertAt(position, newMarble.toString());
}
const insertMarbleAfter = (existing, newData) => {
  const newMarble = new CircularList.Node(newData);
  playedMarbles.insert(existing, newMarble);
}

const getMarbleBefore = (marble, offset = 1) => {
  if (offset===0) return marble;
  return getMarbleBefore(marble.prev, offset - 1);
}
const getMarbleAfter = (marble, offset = 1) => {
  if (offset===0) return marble;
  return getMarbleAfter(marble.next, offset - 1);
}
const getMarbleValue = (marble) => parseInt(marble.data);
const removeMarble = (marble) => {
  playedMarbles.remove(marble);
}

const playTurn = () => {
    if (isScoringMarble(nextMarbleNumber)) {
    const scoringMarbleValue = nextMarbleNumber;

    scorePlayer(currentPlayer, scoringMarbleValue);
    const secondScoringMarble = getMarbleBefore(currentMarble, 7);
    const secondScoringMarbleValue = getMarbleValue(secondScoringMarble)
    scorePlayer(currentPlayer, secondScoringMarbleValue);
    removeMarble(secondScoringMarble);
    currentMarble = getMarbleBefore(currentMarble, 6);
  } else {
    insertMarbleAfter(getMarbleAfter(currentMarble), nextMarbleNumber.toString());
    currentMarble = getMarbleAfter(currentMarble, 2);
  }
  incrementMarbleNumber();
  incrementPlayer();
}

const start = Date.now();
console.log({start})
while(nextMarbleNumber < (LAST_MARBLE*100)+1 ) {
  if (nextMarbleNumber % 100 === 0){
    console.log(`Player [${currentPlayer}], next marble ${nextMarbleNumber}, Current Marble ${currentMarble}`)
  }
  playTurn();
}
const end = Date.now();
console.log({end})
console.log({duration: end-start})

console.log('Max score:', findMaxScore(scores));
