'use strict';

module.exports = takeIterator;

function* takeIterator(xs, n) {
  if (n === 0) return;
  let i = 0;
  for (let x of xs) {
    yield x;
    if (++i === n) break;
  }
}
