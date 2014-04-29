'use strict';

let map = require('map-iterator');
let nats = require('naturals');
let expect = require('expect.js');
let take = require('./');

describe('take-generator', function(){
  it('works on multiple invocations', function(){
    function fiveDoubledNats() {
      let doubled = map(nats(), function(x) { return x * 2; })
      return take(doubled, 5);
    }
    let run = fiveDoubledNats();

    expect(run.next().value).to.be(0);
    expect(run.next().value).to.be(2);
    expect(run.next().value).to.be(4);
    expect(run.next().value).to.be(6);
    expect(run.next().value).to.be(8);

    run = fiveDoubledNats();

    expect(run.next().value).to.be(0);
    expect(run.next().value).to.be(2);
    expect(run.next().value).to.be(4);
    expect(run.next().value).to.be(6);
    expect(run.next().value).to.be(8);
  });

  it('taking 0 returns empty iterator', function(){
    let empty = take(nats(), 0)

    expect(empty.next().done).to.be(true);
  });

  it('taking 1 returns one', function(){
    let empty = take(nats(), 1)

    expect(empty.next().value).to.be(0);
    expect(empty.next().done).to.be(true);
  });
});
