'use strict';

let map = require('lazy-map-generator');
let nats = require('naturals');
let expect = require('expect.js');
let take = require('./');

describe('lazy-take-generator', function(){
  it('works on multiple invocations', function(){
    let doubled = map(nats, function(x) { return x * 2; });
    let fiveDoubledNats = take(doubled, 5);
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
});
