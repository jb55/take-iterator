'use strict';

module.exports = take;

function* take(genFn, n) {
  let i = 0;
  for (let x of genFn()) {
    yield x;
    if (++i === n) break;
  }
}
