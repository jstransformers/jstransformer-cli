# jstransformer-cli

[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-cli.svg)](https://greenkeeper.io/)

Command line interface for [JSTransformers](http://github.com/jstransformers/jstransformer).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-cli/master.svg)](https://travis-ci.org/jstransformers/jstransformer-cli)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-cli/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-cli)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-cli/master.svg)](http://david-dm.org/jstransformers/jstransformer-cli)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-cli.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-cli.svg)](https://www.npmjs.org/package/jstransformer-cli)

## Installation

    npm install -g jstransformer-cli

## Usage

    jstransformer <transformer> <file> [options]
    cat <file> | jstransformer <transformer> [options]

    Options:

      --version  output the version number
      --locals   JSON string for locals
      --options   JSON string for options

## Example

    jstransformer marked README.md > README.html
    cat README.md | jstransformer marked > README.html

## License

MIT
