'use strict'

const chai = require('chai')
const expect = chai.expect

const Hotel = require("../src/Hotel.js")
var hotel = new Hotel();
// console.log(Hotel);

// describe('A failing test', function () {
//   it('should fail', function () {
//     expect(true).to.equal(false);
//   })
// })

describe('Lakewood', function () {
  it('Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)', function () {
    const op = hotel.bestPrice('Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)')
    expect(op).to.equal('Lakewood');
  })
});

describe('Bridgewood', function () {
  it('Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)', function () {
    const op = hotel.bestPrice('Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)')
    expect(op).to.equal('Bridgewood');
  })
});

describe('Ridgewood', function () {
  it('Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)', function () {
    const op = hotel.bestPrice('Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)')
    expect(op).to.equal('Ridgewood');
  })
});