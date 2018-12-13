const R = require("ramda");
var	query = require('cli-interact').getYesNo;

// const { test: input } = require('./input');
const { input } = require('./input');

const TRAIN = '*';
const cartTypes = ['v', '^', '<', '>'];
const directions = ['D', 'U', 'L', 'R'];
const trackForInput = (i) => {
  if (cartTypes.includes(i)) {
    if (i=='v' || i=='^') { return '|'; }
    return '-';
  } else {
    return i;
  }
};
const cartDirections = {'v': 'D', '^': 'U', '<': 'L', '>': 'R' };
const cartSteps = {
  'D': {x: 0, y: 1},
  'U': {x: 0, y: -1},
  'L': {x: -1, y: 0},
  'R': {x: 1, y: 0},
};
const HEIGHT = input.length;
const WIDTH = input[0].length;
const yScan = R.range(0,HEIGHT);
const xScan = R.range(0,WIDTH);

console.log({ HEIGHT, WIDTH });

const trackMap = {};
const cartMap = {};
const liveMap = {};
let carts = [];
xScan.map(x => {
  cartMap[x] = {};
  trackMap[x] = {};
  liveMap[x] = {};
  yScan.map(y => {
    cartMap[x][y] = false;
    const inputCell = input[y][x];
    trackMap[x][y] = trackForInput(inputCell);
    liveMap[x][y] = trackForInput(inputCell);
    if (cartTypes.includes(inputCell)) {
      cartMap[x][y] = carts.length+1;
      liveMap[x][y] = TRAIN;
      carts.push({
        id: carts.length+1,
        x,
        y,
        dir: cartDirections[inputCell],
        turns: 0,
      })
    }
  });
});

const printMap = () =>
  yScan.map(y => {
    console.log(xScan.map(x => liveMap[x][y]).join(''))
  });

console.log('Starting Carts');
console.log(carts);

const isIntersection = cell => cell === '+';
const getMapCell = ({x, y}) => trackMap[x][y];

const nextDirections = {
  L: { ['/']: 'D', ['-']: 'L', ['T']: 'U'},
  R: { ['/']: 'U', ['-']: 'R', ['T']: 'D'},
  U: { ['/']: 'R', ['|']: 'U', ['T']: 'L'},
  D: { ['/']: 'L', ['|']: 'D', ['T']: 'R'},
}
const getNextDirection = (cell, cart) => {
  // if (cart.id === 15) console.log('getNextDirection', {cell, cart})
  if (isIntersection(cell)){
    return getNextIntersectionDirection(cart.dir, cart.turns)
  }
  return nextDirections[cart.dir][cell];
};

const getNextTurnCount = (cell, turns) => 
  isIntersection(cell) ? turns + 1 : turns;

const getNextLocation = (cart) => {
  // if (cart.id === 15) console.log({cart, cartSteps})
  return ({
    x: cart.x + cartSteps[cart.dir].x,
    y: cart.y + cartSteps[cart.dir].y,
  });
}

const nextIntersectionDirections = {
  L: { [0]: 'D', [1]: 'L', [2]: 'U'},
  R: { [0]: 'U', [1]: 'R', [2]: 'D'},
  U: { [0]: 'L', [1]: 'U', [2]: 'R'},
  D: { [0]: 'R', [1]: 'D', [2]: 'L'},
}
const getNextIntersectionDirection = (direction, turns) => {
  const turnType = turns % 3; // 0, 1, 2 = L, S, R
  return nextIntersectionDirections[direction][turnType];
}

let deadCarts = [];
const killCart = cart => {
  console.log({cart});
  
  deadCarts.push(cart.id);
  console.log({deadCarts});
}
const checkCollision = ({x, y}, cart) => {
  // console.log('');
  if (cartMap[x][y]) {
    // throw new Error(`💥💥💥💥💥 Collision at (${x}, ${y}), after tick ${tick}! 💥💥💥💥💥`)
    console.log(`💥💥💥💥💥 Collision at (${x}, ${y}), after tick ${tick}, with ${cartMap[x][y]} ! 💥💥💥💥💥`)
    const otherCart = carts.find(c => c.id === cartMap[x][y] );
    killCart(cart);
    killCart(otherCart);
}
}

const moveCart = (cart) => {
  const {x, y} = getNextLocation(cart);
  checkCollision({x, y}, cart);
  const cell = getMapCell({x, y});
  const nextDir = getNextDirection(cell, cart);
  const nextTurns = getNextTurnCount(cell, cart.turns);
  liveMap[cart.x][cart.y] = trackMap[cart.x][cart.y];
  cartMap[cart.x][cart.y] = false;
  cartMap[x][y] = cart.id;
  liveMap[x][y] = TRAIN;
  return {
    id: cart.id,
    x,
    y,
    dir: nextDir,
    turns: nextTurns,
  };
};

const sortCarts = coords => R.sortBy(R.prop('y'), R.sortBy(R.prop('x'), coords))
const cartCompare = (a, b) => a.y === b.y ? a.x - b.x : a.y - b.y;

const moveAllCarts = () => {
  // const sortedCarts = sortCarts(carts);
  const sortedCarts = R.sort(cartCompare, carts);
  console.log(sortedCarts)
  let nextCarts = sortedCarts.map(moveCart);
  carts = nextCarts;
}

console.log('Sorted Carts?');
console.log(sortCarts(carts));
console.log({numCarts: carts.length});

const checkRemainingCarts = () => {
  carts.filter(c => deadCarts.includes(c.id)).map(c => {
    liveMap[c.x][c.y] = trackMap[c.x][c.y];
    cartMap[c.x][c.y] = false;
  });
  carts = carts.filter(c => !deadCarts.includes(c.id));
  console.log({remainingCarts: carts.length})
  if (carts.length === 1) {
    console.log('🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑')
    console.log({lastCart: carts[0]})
    console.log('🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑')
    throw new Error('Last cart.')
  }
}

let tick = 0;
while (tick < 20000) {
  console.log({tick})
  // query('Do next tick? [press enter]', true);
  moveAllCarts();
  checkRemainingCarts();
  // carts = carts.filter(c => !deadCarts.includes(c.id));
  // if (remainingCarts.length === 1) {
  //   console.log({lastCart: remainingCarts[0]})
  // }
  // console.log(carts);
  // console.log(carts.filter(c => c.id === 4));
  // printMap();
  tick++;
}

// WRONG (84, 20) @ 93

