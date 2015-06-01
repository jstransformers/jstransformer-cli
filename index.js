var transform = require('jstransformer-jstransformer');

exports.name = 'cli';
exports.outputFormat = 'html';

exports.render = transform.render;
exports.renderFile = transform.renderFile;
