const assert  = require('chai').assert
const bubbleSort = require('../bubbleSort')

describe('bubbleSort functionality', function() {
  context('bubbleSort function', function() {
    it('sorts an array of integers', function() {
      assert.deepEqual(bubbleSort([5, 3, 12, 15, 1]), [1, 3, 5, 12, 15])
    });
  });
});
