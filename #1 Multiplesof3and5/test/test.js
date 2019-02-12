const chai = require('chai');
const should = chai.should();
const sum = require('../multiplesOf3and5');

describe('Multiples of 3 and 5', () => {
  describe('Sum', () => {
    it('Find the sum of all the multiples of 3 or 5 below 1000', () => {
      sum.should.be.equal(233168);
    });
  });
});