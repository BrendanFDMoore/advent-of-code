const R = require("ramda");
const { input, test } = require('./input');

const points = input;
const [minX, maxX] = R.sortBy(p => p.x, points).filter((val, i) =>(i===0 || i===points.length-1))
const [minY, maxY] = R.sortBy(p => p.y, points).filter((val, i) =>(i===0 || i===points.length-1))
console.log({minX, maxX, minY, maxY})

const taxiDistance = (a,b) => Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
const closestPoint = (point, points) => {
  const distances = points.map((p, i) => ({pointId: i, distance: taxiDistance(p, point)}));
  const sorted = R.sortBy(a => a.distance, distances);
  // console.log(sorted);
  if (sorted[0].distance < sorted[1].distance) return sorted[0].pointId;
  return undefined
};

const grid = {};
const scanRange = R.range(0, 400);
scanRange.map( x => {
  grid[x] = {};
  scanRange.map( y => {
    grid[x][y] = closestPoint({ x, y }, points);
  })
})
// console.log('Result:', {grid});
const areaAround = {};
scanRange.map( x => {
  scanRange.map( y => {
    const closest = grid[x][y];
    if (closest >= 0 ) areaAround[closest] = (areaAround[closest] || 0) + 1
  })
})
// console.log('Result:', {areaAround});

const areas = Object.keys(areaAround).map(a => ({id: a, area: areaAround[a]}))
const sortedAreas = R.sortBy(a => a.area, areas)
console.log('Result:', {sortedAreas});

const topEdge = scanRange.map(x => grid[x][scanRange[0]]);
const bottomEdge = scanRange.map(x => grid[x][scanRange[scanRange.length-1]]);
const leftEdge = scanRange.map(y => grid[scanRange[0]][y]);
const rightEdge = scanRange.map(y => grid[scanRange[scanRange.length-1]][y]);

console.log(R.uniq(topEdge))
console.log(R.uniq(bottomEdge))
console.log(R.uniq(leftEdge))
console.log(R.uniq(rightEdge))

console.log((topEdge.reduce((acc, cur) => ({...acc, [cur]: (acc[cur]||0)+1}), {})))
console.log((bottomEdge.reduce((acc, cur) => ({...acc, [cur]: (acc[cur]||0)+1}), {})))
console.log((leftEdge.reduce((acc, cur) => ({...acc, [cur]: (acc[cur]||0)+1}), {})))
console.log((rightEdge.reduce((acc, cur) => ({...acc, [cur]: (acc[cur]||0)+1}), {})))

const totalDistance = (p, points) =>
  points.reduce((acc, cur) => acc + taxiDistance(p, cur), 0)

const safegrid = {};
scanRange.map( x => {
  safegrid[x] = {};
  scanRange.map( y => {
    safegrid[x][y] = totalDistance({ x, y }, points);
  })
})

let safearea = 0;
scanRange.map( x => {
  scanRange.map( y => {
    if (safegrid[x][y]<10000) {safearea++;}
  })
})
console.log('Result:', {safearea});
