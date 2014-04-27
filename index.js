'use strict';

module.exports = takeIterator;

function* takeIterator(xs, n) {
  let i = 0;
  for (let x of xs) {
    yield x;
    if (++i === n) break;
  }
}
