'use strict';

var assert = require('assert');
var fs = require('fs');
var join = require('path').join;
var test = require('testit');

var cli = require('../');

var expected = fs.readFileSync(join(__dirname, 'expected.txt')).toString();

function assertEqual(output, expected) {
  console.log('   Output:\t'   + JSON.stringify(output));
  console.log('   Expected:\t' + JSON.stringify(expected));
  assert.equal(output, expected);
}

test('should process input.txt properly.', function () {
  var output = cli.renderFile('marked', 'test/input.txt');
  assertEqual(output.trim(), expected.trim());
});
