const R = require("ramda");
const CircularList = require("circular-list");
const { add2 } = require('../../common/utils');

const TARGET_LENGTH = 47801;
// const TARGET_LENGTH = 9;

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

let scoreboard = new CircularList();

var first = new CircularList.Node(3)
var second = new CircularList.Node(7)
scoreboard.append(first);
scoreboard.append(second);
let recipeCount = 2;
let firstElfRecipe = first;
let secondElfRecipe = second;

// const getBefore = (current, offset = 1) => {
//   if (offset === 0) return current;
//   return getBefore(current.prev, offset - 1);
// }
const getAfter = (current, offset = 1) => {
  if (offset === 0) return current;
  return getAfter(current.next, offset - 1);
}
 let lastTen = [];

const addNewRecipes = () => {
  const scoreTotal = firstElfRecipe.data + secondElfRecipe.data;
  console.log({scoreTotal});
  [...(scoreTotal.toString())].forEach(d => {
    scoreboard.append(new CircularList.Node(parseInt(d)))
    recipeCount+=1;
    if (recipeCount>TARGET_LENGTH) {
      lastTen.push((d));
      console.log('Adding:', {d})
    }
  })
}

const moveElves = () => {
   firstElfRecipe = getAfter(firstElfRecipe, firstElfRecipe.data + 1);
   secondElfRecipe = getAfter(secondElfRecipe, secondElfRecipe.data + 1);
}

while (recipeCount< (TARGET_LENGTH+10)){
  console.log({recipeCount});
  addNewRecipes();
  moveElves();
}

console.log(lastTen);
console.log({lastTenLen: lastTen.length});
const total = lastTen.reduce(add2, 0);
console.log({total});

// WRONG [ '1', '3', '4', '2', '3', '1', '6', '4', '1', '0' ] = 25