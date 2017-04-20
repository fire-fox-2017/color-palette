var chai = require('chai')
var getPallete = require('../lib/get_pallete')
var assert = chai.assert;

describe('getPallete()', function() {
  it('should return an array with 3 elements', function() {

    assert.equal(getPallete().length, 2);

    //assert.equal(arr.length, 0);
  });
});












// describe('#getPallete()', function(){
//   it('should return an array with 3 elements', function(){
//     (function(){
//       [1,2,3].indexOf(3);
//     }).should.not.throw();
//   });
//   it('should return -1', function(){
//     [1,2,3].indexOf(4).should.equal(-1);
//   });
// });
