'use strict'

const assert = require('assert')
const childProcess = require('child_process')
const fs = require('fs')
const join = require('path').join
const test = require('testit')

const inputFile = 'test/input.twig'
const locals = fs.readFileSync(join(__dirname, 'locals.json')).toString().trim()
const expected = fs.readFileSync(join(__dirname, 'expected.html')).toString().trim()

function assertEqual(output, expected) {
  console.log('   Output:\t' + JSON.stringify(output))
  console.log('   Expected:\t' + JSON.stringify(expected))
  assert.equal(output, expected)
}

test('bin/jstransformer twig ' + inputFile, done => {
  const args = [
    'twig',
    inputFile,
    '--locals=' + locals
  ]
  childProcess.execFile('bin/jstransformer', args, (err, stdout) => {
    if (err) {
      done(err)
    } else {
      assertEqual(stdout.toString().trim(), expected)
      done()
    }
  })
})

// TODO: Add a test for piping information.
