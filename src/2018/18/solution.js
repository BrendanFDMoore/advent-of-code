const R = require("ramda");
const { input } = require('./input');

let region = input.map(r => r.split(''));

const printRegion = reg => reg.map(row => console.log(row.join('')));

printRegion(region);

const getAcresAround = (x, y, reg) => { 
  let acres = [];
  [-1,0,+1].map(s => {
    if (!reg[y+s]) return;
    [-1,0,+1].map(t => {
      if (!reg[y+s][x+t]) return;
      if (!(s===0 && t===0)) {
        const acre = reg[y+s][x+t];
        if (acre) {
          acres.push(acre);
        }
      }
    });
  });
  return acres;
};

const runGeneration = (reg) =>
  reg.map((row, iy) => 
    row.map((acre, ix) => {
      // const acre = reg[row][a];
      const neighbours = getAcresAround(ix, iy, reg);
      if (acre === '.') {
        if (neighbours.filter(n => n === '|').length>=3) return '|';
      }
      else if (acre === '|') {
        if (neighbours.filter(n => n === '#').length>=3) return '#';
      }
      else if (acre === '#') {
        if (
          neighbours.filter(n => n === '#').length>=1
          && neighbours.filter(n => n === '|').length>=1
        ) return '#';
        return '.';
      }
      return acre;
    })
  );

const getValue = (reg) => {
  let yards=0;
  let forests = 0;
  reg.map((row, iy) => 
    row.map((acre, ix) => {
      if (acre==='#') yards+=1;
      if (acre==='|') forests+=1;
    })
  );
  return forests*yards;
}

let gen = 0;
const MAXGEN = 1000000000
while (gen < MAXGEN) {
  console.log({gen})
  region = runGeneration(region);
  // printRegion(region);
  console.log({value: getValue(region)})
  gen +=1
}
console.log({value: getValue(region)})

// wrong 62959

// After < 12k generations, the value repeats every 28 minutes. Just use 1,000,000,000 % 28  = 20 and get the score from some other gen x % 28 = 20.
// I used gen 11668, value 165376
