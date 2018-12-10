const R = require("ramda");
const { input } = require('./input');

let points = input.map(p => ({
  x: parseInt(p.substr(10, 6)),
  y: parseInt(p.substr(18, 6)),
  vx: parseInt(p.substr(36, 2)),
  vy: parseInt(p.substr(40, 2)),
}))

// points.map(p =>{
//   console.log(p)
// })

const distance = (p1, p2) => Math.sqrt(((p1.x - p2.x)**2)+((p1.y-p2.y)**2));
// Find minimum of the maximum distance between points
const maxDistance = () => {
  let maxDistance = 0;
  points.map( (p1, i1) => {
    points.map((p2, i2) => {
      const dist = distance(p1, p2);
      if (dist > maxDistance) { maxDistance = dist;}
    })
  })
  return maxDistance;
}

const movePoints = (t = 1) => {
  points.map( p => {
    p.x+=p.vx*t;
    p.y+=p.vy*t;
  })
}

// let blankRow = R.repeat('.', 200);
// let blankGrid = R.repeat(R.repeat('.', 200), 300)
const plotPoints = () => {
  let grid = [];
  R.range(0,300).map( r => grid.push(R.repeat('.', 250)))
  points.map(p => {
    grid[p.y][p.x] = '#';
  });
  grid.map((r, i) => {
    if (i>150 && i< 250){
      console.log( r.join(''));
    }
  })
}

let time = 0;
movePoints(10272)
time=10272;
while (time <= 10275) {
  time+=1
  movePoints();
  console.log(`Time: ${time}, max distance: ${maxDistance()}`)
  // console.log(points);
  plotPoints();
}

// MINIMIZATION ZONE - ANSWER PROBLEM HERE
// Time: 10263, max distance: 196.2065238466856
// Time: 10264, max distance: 182.20043907740728
// Time: 10265, max distance: 168.21712160181556
// Time: 10266, max distance: 154.26276284314372
// Time: 10267, max distance: 140.54536634126364
// Time: 10268, max distance: 127.47548783981962
// Time: 10269, max distance: 114.49454135459908
// Time: 10270, max distance: 101.95096860746347
// Time: 10271, max distance: 89.81091247727082
// Time: 10272, max distance: 77.88452991448301
// Time: 10273, max distance: 68.59300255857006
// Time: 10274, max distance: 61.5223536610881
// Time: 10275, max distance: 71.7007670809734
// Time: 10276, max distance: 82.76472678623425
// Time: 10277, max distance: 94.64142856064674
// Time: 10278, max distance: 106.89246933250256
// Time: 10279, max distance: 119.4026800369238
// Time: 10280, max distance: 132.09844813622905
// Time: 10281, max distance: 145.41320435228707
// Time: 10282, max distance: 159.0125781188394
// Time: 10283, max distance: 172.69916039170545
// Time: 10284, max distance: 186.45374761586316
// Time: 10285, max distance: 200.26232796010336