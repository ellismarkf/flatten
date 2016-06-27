var expect = require('chai').expect;
var flatten = require('./flatten.js');

describe('flatten', function() {
	it('should flatten an array of arbitrarily nested arrays of integers into a flat array of integers', function() {
		var nestedArray = [[1,2,[3]],4];
		var flattenedArray = flatten(nestedArray);

		expect(flattenedArray.length).to.equal(4);
	});
});
