function flatten(array) {
	return array.reduce( function(result, element) {
		if (element.length) {
			return result.concat(flatten(element));
		} else {
			return result.concat(element);
		}
	}, []);
}

module.exports = flatten;
