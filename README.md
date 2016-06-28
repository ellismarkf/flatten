flatten
========

Just a small function that does as the description explains: flattens an arbitrarily nested array of arrays of integers. Uses a recursive strategy to handle nesting, and written in a functional style.

This implementation assumes that arrays only contain integers, not any other primitives.  The logic that decides whether to recursively call the function again is predicated on the presence of a `length` property, which Integers in Javascript do not have.  Passing an array containing other primitives to the *flatten* function will result in a runtime error.

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
