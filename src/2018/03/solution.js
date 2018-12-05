const R = require("ramda");

const { input } = require('./input');

console.log('Result:', undefined);

const parseClaim = s => {
  // const [idSrc, posSrc] = s.split('@');
  // const id = parstInt(idSrc);
  const [id, x, y, w, h] = s.match(/(\d+)/g);

  return {
    id: parseInt(id),
    x: parseInt(x),
    y: parseInt(y),
    w: parseInt(w),
    h: parseInt(h),
  };
}
const claims = input.map(parseClaim);
console.log(claims);

const inches = R.range(0,1000);
const countCol = inches.reduce((a,c)=> ({...a, [c]: 0}))
let claimCounts = inches.reduce(
  (acc, cur) => ({
    ...acc,
    [cur]: {...countCol},
  }),
  {}
);
// console.log(claimCounts);

const recordClaim = claim => {
  const cols = R.range(claim.x, claim.x+claim.w)
  const rows = R.range(claim.y, claim.y+claim.h)
  cols.map(c => {
    rows.map( r=> {
      claimCounts[c][r] = claimCounts[c][r] + 1;
    })
  })
}

claims.map(recordClaim);

console.log(claimCounts);

let multipleClaimedSquareInches = 0;
inches.map(x => {
  inches.map(y => {
    if (claimCounts[x][y] >= 2) multipleClaimedSquareInches++
  })
})

console.log({multipleClaimedSquareInches});



