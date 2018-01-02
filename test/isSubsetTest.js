const isSubset = require('../src/isSubset.js').isSubset;
const assert = require('chai').assert;

describe('isSubset',function(){
  it('should return true if the set is subset to superset',function(){
    assert.isOk(isSubset([1,2,3],[1,2,3,4]));
  })

  it('should return false if set is not subset to superset',function(){
    assert.isNotOk(isSubset([1,2],[2,3,4]));
  })

  it('should retirn true if both the sets are empty',function(){
    assert.isOk(isSubset([],[]));
  })
})
