var assert   = require('assert')
var flip = require('./index')

var testFunc = (a1, a2) => a1 - a2;

var flipTestFunc = flip(testFunc);

assert.equal(flipTestFunc(2, 3), testFunc(3, 2));