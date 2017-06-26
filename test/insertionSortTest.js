const assert = require('chai').assert
const insertionSort = require('../insertionSort')

describe('insertionSort function', function() {
  it('sorts an array of elements by its values', function() {
    assert.deepEqual(insertionSort([5, 3, 12, 15, 1]), [1, 3, 5, 12, 15])
  })
})
