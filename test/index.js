'use strict';

var assert = require('assert');
var fs = require('fs');
var join = require('path').join;
var test = require('testit');
var childProcess = require('child_process');

var cli = require('../');

var inputFile = 'test/input.octet';
var locals = fs.readFileSync(join(__dirname, 'locals.json')).toString().trim();
var expected = fs.readFileSync(join(__dirname, 'expected.html')).toString().trim();

function assertEqual(output, expected) {
  console.log('   Output:\t'   + JSON.stringify(output));
  console.log('   Expected:\t' + JSON.stringify(expected));
  assert.equal(output, expected);
}

test('bin/jstransformer octet ' + inputFile, function(done) {
  var args = [
    'octet',
    inputFile,
    "--locals=" + locals
  ];
  var result = childProcess.execFile('bin/jstransformer', args, function (err, stdout, stderr) {
    if (err) {
      done(err);
    }
    else {
      assertEqual(stdout.toString(), expected);
      done();
    }
  });
});

// TODO: Add a test for piping information.
