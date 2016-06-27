var expect = require('chai').expect;
var flatten = require('./flatten.js');

describe('flatten', function() {
	it('should return an array with length property equal to the number of integers in nested array', function() {
		var nestedArray = [[1,2,[3]],4];
		var flattenedArray = flatten(nestedArray);

		expect(flattenedArray.length).to.equal(4);
	});
	it('should return an array containing all elements of nested array', function() {
		var nestedArray = [[1,2,[3]],4];
		var expectedResult = [1, 2, 3, 4];
		var flattenedArray = flatten(nestedArray);

		expect(flattenedArray).to.eql(expectedResult);
	});
	it('should flatten an array of arbitrarily nested arrays of integers into a flat array of integers', function() {
		var nestedArray = [[[1, 2], [3, [4, 5, 6, [7]]]], 8, [9, [10, [11]]]];
		var expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
		var flattenedArray = flatten(nestedArray);

		expect(flattenedArray.length).to.equal(11);
		expect(flattenedArray).to.eql(expectedResult);
	});
});
