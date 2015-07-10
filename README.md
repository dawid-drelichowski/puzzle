# Puzzle [![Build Status](https://travis-ci.org/dawid-drelichowski/puzzle.png?branch=master)](https://travis-ci.org/dawid-drelichowski/puzzle)

Simple drag and drop puzzle game which uses native HTML 5 drag and drop feature, without any JavaScript client site framework.

## Requirements

* [Node.js](https://nodejs.org/) version 10.0.0 or higher.
* [Grunt-cli](https://github.com/gruntjs/grunt-cli) if changes in the code and test are being planned.

## Installation

Command: `npm install`.

## Usage

Run **index.html** in favorite browser.

## Tests

Based on [Karma](http://karma-runner.github.io/), [PhantomJS](http://phantomjs.org/), [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/).

Command: `grunt karma`

## Development

To switch JavaScript code loading from minimized production version to development source code use: `grunt dev` command.
To combine scripts, minimize changes and switch back to production file use: `grunt prod` command.

## Grunt tasks

* `grunt jshint` runs [JSHint](http://jshint.com/) source code check.
* `grunt karma` runs tests.
* `grunt requirejs` combines related scripts and minimizes them.
* `grunt dev` switches to development version.
* `grunt prod` combines related scripts, minimizes them and switches to production version.


## Used libraries

* [Require.js](http://requirejs.org/)
* [Bootstrap](http://getbootstrap.com/)
* [Bower](http://bower.io/)
* [Grunt](http://gruntjs.com/)
* [JSHint](http://jshint.com/)
* [Karma](http://karma-runner.github.io/)
* [PhantomJS](http://phantomjs.org/)
* [Mocha](http://mochajs.org/)
* [Chai](http://chaijs.com/)