var assert = require('assert');
var _ = require('underscore');
var expect = require('chai').expect;

var fib = require('../lib/fib');

describe('filter', function(){
  var fibCounter;

  before(function(){
    fibCounter = fib();
  });

  function nTimesFib(n) {
    console.log('call');
    _(n).times(function(){fibCounter();});
  }

  it('1st call return 1', function(){
    expect(fibCounter()).to.be.equal(1);
  });

  it('2st call return 1', function(){
    nTimesFib(1);
    expect(fibCounter()).to.be.equal(1);
  });


  it('3rd call return 2', function(){
    nTimesFib(2);
    expect(fibCounter()).to.be.equal(2);
  });


  it('4th call return 3', function(){
    nTimesFib(3);
    expect(fibCounter()).to.be.equal(3);
  });


  it('5th call return 5', function(){
    nTimesFib(4);
    expect(fibCounter()).to.be.equal(5);
  });

  it('6th call return 8', function(){
    nTimesFib(5);
    expect(fibCounter()).to.be.equal(8);
  });

});
