# label [![Build Status](https://travis-ci.org/eliasgs/label.png?branch=master)](https://travis-ci.org/eliasgs/label)
Inspired by Heroku, ``label`` generates random two word identifiers.

## Install

```bash
npm install label
```

## CLI

```bash
usage: label [--delimiter|-d <delimiter>] [--capitalize|-c]
             [--help|-h] [--version|-v]
```

## Usage examples

```javascript
var label = require('label');

var title = label.generate();
console.log(title); // Light Beard

var random = label.generate(true);
console.log(random); // liquid stream

var uri = 'https://' + label.generate(true, '-') + '.example.com/';
console.log(uri); // https://intimate-rabbit.example.com/
```

## Note

Probability of collision is 0.00007%.
