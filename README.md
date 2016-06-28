flatten
========

Just a small function that does as the description explains: flattens an arbitrarily nested array of arrays of integers. Uses a recursive strategy to handle nesting, and written in a functional style.  Assumes that arrays only contain integers, not any other primitives.

## usage

```
git clone https://github.com/ellismarkf/flatten.git
cd flatten
npm install
```

To use the *flatten* function, either `require('/path/to/flatten.js')` or `import flatten from '/path/to/flatten'`.

```javascript
var flatten = require('./flatten.js');
var flattenedArray = flatten(someNestedArray);
```

## testing

The flatten function is unit tested using the mocha framework, with the chai assertion library.  You'll need mocha installed globally to run the tests.  Run the unit tests with either `mocha` or `npm test` at the top level of the project directory.

```
npm i -g mocha
npm test
```
