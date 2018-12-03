const R = require('ramda');

const add2params = (x, y) => x + y;
const add2 = R.curry(add2params);

module.exports = {
  add2,
}
