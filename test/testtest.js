var chai = require('chai')
var should = chai.should();
// var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('returns -1 when the value is not present', function() {
      should.equal(-1, [1,2,3].indexOf(4));
      // assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
