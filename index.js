var jstransformer = require('jstransformer');
var lazyRequire = require('lazy-require');
var fs = require('fs');

exports.renderFile = function (transformer, file) {
  // Verify the arguments.
  if (!transformer) {
    throw new Error('Provided transform not found.');
  }
  if (!file) {
    throw new Error('[file] is required.');
  }
  if (!fs.existsSync(file)) {
    throw new Error('[file] does not exist.');
  }

  // Load the transform.
  var transform = lazyRequire('jstransformer-' + transformer);
  if (transform instanceof Error) {
    throw new Error('Provided transformer not found.');
  }

  // Render the file.
  return jstransformer(transform).renderFile(file).body;
};

exports.out = function (transformer, file) {
  var output = exports.renderFile(transformer, file);
  console.log(output);
};
