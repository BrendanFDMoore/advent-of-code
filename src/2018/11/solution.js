const R = require("ramda");
// const { input } = require('./input');

const SERIAL = 4455;
const GRID_SIZE = 300;
const gridSizeRange = R.range(1,301);
const gridSearchRange = R.range(1,301);

const getPowerLevel = (x,y,serial) => {
  const rackId = x + 10;
  let power = rackId * y;
  power = power + serial;
  power = power * rackId;
  power = ((power - (power % 100)) % 1000) / 100;
  power = power - 5;

  return power;
}

console.log('Test power level Calc');
console.log(getPowerLevel(122,79, 57), '== -5?');
console.log(getPowerLevel(217,196, 39), '== 0?');
console.log(getPowerLevel(101,153, 71), ' == 4?');

const powerLevels = {};
gridSizeRange.map(x => {
  powerLevels[x] = {};
  gridSizeRange.map(y => {
    powerLevels[x][y] = getPowerLevel(x, y, SERIAL);
  })
});

const getCellTotal = (x,y,s) => {
  let cellTotal = 0;
  const cellRange = R.range(0,s);
  cellRange.map((cx, cxi) => {
    cellRange.map((cy, cyi) => {
      cellTotal += (powerLevels[x+cx][y+cy]||0);
    })
  });
  return cellTotal;
}

// console.log(powerLevels[1])
const cellSizeSearchRange = R.range(3,4);

let maxX, maxY, maxSize, maxCell = -100000;
cellSizeSearchRange.map(s => {
  console.log({currentCellSize: s});
  gridSearchRange.map(x => {
      if ((x + (s-1) > GRID_SIZE)) return;
      gridSearchRange.map(y => {
      if ((y + (s-1) > GRID_SIZE)) return;
      const tempCell = getCellTotal(x,y,s);
      if (tempCell > maxCell) {
        maxX = x;
        maxY = y;
        maxSize = s;
        maxCell = tempCell;
      }
    })
  });
  console.log({cellSize: s, maxX, maxY, maxSize, maxCell})
});

console.log({maxX, maxY, maxSize, maxCell})

