var assert = require('assert');
var _ = require('underscore');
var expect = require('chai').expect;

var fib = require('../lib/fib');

describe('fib', function(){

  it('1..9 returns 1 1 2 3 5 8 13 21 34', function(){
    expect(fib.nacci()).to.be.equal(1);
    expect(fib.nacci()).to.be.equal(1);
    expect(fib.nacci()).to.be.equal(2);
    expect(fib.nacci()).to.be.equal(3);
    expect(fib.nacci()).to.be.equal(5);
    expect(fib.nacci()).to.be.equal(8);
    expect(fib.nacci()).to.be.equal(13);
    expect(fib.nacci()).to.be.equal(21);
    expect(fib.nacci()).to.be.equal(34);
  });

});
