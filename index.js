'use strict';

let isGen = require('is-generator');

module.exports = takeGenerator;

function* takeGenerator(gen, n) {
  let i = 0;
  gen = isGen.fn(gen)? gen() : gen;
  for (let x of gen) {
    yield x;
    if (++i === n) break;
  }
}
