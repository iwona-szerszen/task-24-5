const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
	it('should work if all notes are different', () => {
		const actual = calculateStylePoints([20, 15, 17, 16, 18]);

		const expected = 51;

		assert.equal(actual, expected);
	});

	it('should work if a few (but not all) notes are the same', () => {
		const actual = calculateStylePoints([19, 17, 17, 20, 19.5]);

		const expected = 55.5;

		assert.equal(actual, expected);
	});	

	it('should work if all notes are the same', () => {
		const actual = calculateStylePoints([18, 18, 18, 18, 18]);

		const expected = 54;

		assert.equal(actual, expected);
	});
});