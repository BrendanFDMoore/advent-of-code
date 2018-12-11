const R = require("ramda");
// const { input } = require('./input');

const SERIAL = 4455;
const GRID_SIZE = 300;
const gridSizeRange = R.range(1,301);
const gridSearchRange = R.range(1,299);

const getPowerLevel = (x,y,serial) => {
  const rackId = x + 10;
  let power = rackId * y;
  power = power + serial;
  power = power * rackId;
  power = ((power - (power % 100)) % 1000) / 100;
  power = power - 5;

  return power;
}

console.log(getPowerLevel(122,79, 57), '-5?');
console.log(getPowerLevel(217,196, 39), '0?');
console.log(getPowerLevel(101,153, 71), '4?');

const powerLevels = {};
gridSizeRange.map(x => {
  powerLevels[x] = {};
  gridSizeRange.map(y => {
    powerLevels[x][y] = getPowerLevel(x, y, SERIAL);
  })
});

const cellRange = R.range(0,3);
const getCellTotal = (x,y) => {
  let cellTotal = 0;
  cellRange.map(cx => {
    cellRange.map(cy => {
      cellTotal += powerLevels[x+cx][y+cy];
    })
  });
  return cellTotal;
}

// console.log(powerLevels[1])
let maxX, maxY, maxCell = -100000;
gridSearchRange.map(x => {
  gridSearchRange.map(y => {
    const tempCell = getCellTotal(x,y);
    if (tempCell > maxCell) {
      maxX = x;
      maxY = y;
      maxCell = tempCell;
    }
  })
});

console.log({maxX, maxY, maxCell})

