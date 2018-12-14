const R = require("ramda");
const CircularList = require("circular-list");
const { add2 } = require('../../common/utils');

const TARGET_LENGTH = 47801;
const TARGET_SEQ = '047801'; // '047801'; // '59414' takes 2018

// const TARGET_LENGTH = 9;

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

let scoreboard = new CircularList();
let tailScores = new CircularList();
let tailScoresLength = 0;
let tailString = '';

var first = new CircularList.Node(3)
var second = new CircularList.Node(7)
scoreboard.append(first);
scoreboard.append(second);
scoreboard.append(new CircularList.Node(1));
scoreboard.append(new CircularList.Node(0));
scoreboard.append(new CircularList.Node(1));
scoreboard.append(new CircularList.Node(0));
// tailString = '71010';

// let recipeCount = 2;
// let firstElfRecipe = first;
// let secondElfRecipe = second;
let firstElfRecipe = scoreboard.last.prev;
let secondElfRecipe = scoreboard.last.prev.prev;
let recipeCount = 6;

const getBefore = (current, offset = 1) => {
  if (offset === 0) return current;
  return getBefore(current.prev, offset - 1);
}
const getAfter = (current, offset = 1) => {
  if (offset === 0) return current;
  return getAfter(current.next, offset - 1);
}
let lastTen = [];

let foundTail = false;

const addNewRecipes = () => {
  const scoreTotal = firstElfRecipe.data + secondElfRecipe.data;
  // console.log({scoreTotal});
  [...(scoreTotal.toString())].forEach(d => {
    scoreboard.append(new CircularList.Node(parseInt(d)))
    recipeCount+=1;
    // if (tailScoresLength >= TARGET_SEQ.length) {
    //   tailScores.remove(tailScores.first);
    //   tailScoresLength+=-1;
    // }
    // tailScores.remove(tailScores.first);
    // tailScores.append(new CircularList.Node(d))
    // tailScoresLength+=1;
    // if (recipeCount>TARGET_LENGTH) {
    //   lastTen.push((d));
    //   console.log('Adding:', {d})
    // }
    const tempTail = getRecipeTail();
    // console.log('getRecipeTail:', tempTail)
    if (tempTail === TARGET_SEQ) {
      foundTail = true;
      console.log('🔍🔍🔍🔍🔍🔍🔍🔍 FOUND TAIL 🔍🔍🔍🔍🔍🔍🔍')
      console.log({recipeCount});
      console.log('🔻👇🔻👇🔻👇🔻👇🔻👇🔻👇🔻👇')
      console.log({countMinusTail: recipeCount - TARGET_SEQ.length});
      console.log('🔺👆🔺👆🔺👆🔺👆🔺👆🔺👆🔺👆')
    }
  })
}

const moveElves = () => {
   firstElfRecipe = getAfter(firstElfRecipe, firstElfRecipe.data + 1);
   secondElfRecipe = getAfter(secondElfRecipe, secondElfRecipe.data + 1);
}

const getRecipeTail = () => {
  let tail = `${scoreboard.last.data}`;
  let prev = scoreboard.last;
  R.range(1,TARGET_SEQ.length).map(n => {
    prev = getBefore(prev);
    // tail.push(prev.data);
    tail = prev.data+tail;
  });
  // const joinTail = tail.reverse().join('');
  // console.log({joinTail});
  // return joinTail;
  // console.log({tail});
  return tail;
}

const updateTailString = () => {
  // console.log({tailScores})
  tailString = '';
  tailString = tailScores.each(s => {
    // console.log({data: s})
    tailString = tailString + s;
  })
  console.log({tailString})
}

// Part 1
// while (recipeCount< (TARGET_LENGTH+10)){
//   console.log({recipeCount});
//   addNewRecipes();
//   moveElves();
// }

// while (tailString !== TARGET_SEQ && recipeCount<2030){
// while (tailString !== TARGET_SEQ ){
while(!foundTail) {
  addNewRecipes();
  moveElves();
  // console.log({recipeCount});
  if(recipeCount % 1000 === 0){
    console.log({recipeCount});
  }
  // updateTailString();
  // console.log({tailString})
}
console.log({recipeCount});
console.log({ tail: getRecipeTail() });
console.log({lastTen});
console.log({lastTenLen: lastTen.length});
const total = lastTen.reduce(add2, 0);
console.log({total});
console.log({countMinusTail: recipeCount - TARGET_SEQ.length});

// WRONG [ '1', '3', '4', '2', '3', '1', '6', '4', '1', '0' ] = 25