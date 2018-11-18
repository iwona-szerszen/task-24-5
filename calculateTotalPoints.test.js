const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
	describe('windFactor', () => {
		it('should work if windFactor is greater than or equal to 0', () => {
			const actual = calculateTotalPoints(125, 'big', 120, [18, 18.5, 18, 18.5, 18.5], 1.2, 0);

			const expected = 125.2;

			assert.equal(actual, expected);
		});

		it('should work if windFactor is smaller than 0', () => {
			const actual = calculateTotalPoints(134, 'big', 120, [19, 20, 19.5, 19, 18.5], -5.4, 0);

			const expected = 137.3;

			assert.equal(actual, expected);
		});
	});

	describe('gateFactor', () => {
		it('should work if gateFactor is greater than or equal to 0', () => {
			const actual = calculateTotalPoints(106.5, 'normal', 98, [18.5, 18.5, 18.5, 19, 19], -13.5, 6.4);

			const expected = 125.9;

			assert.equal(actual, expected);
		});

		it('should work if gateFactor is smaller than 0', () => {
			const actual = calculateTotalPoints(108, 'normal', 98, [18, 18.5, 18.5, 18.5, 19], -15.3, -3.2);

			const expected = 117;

			assert.equal(actual, expected);
		});
	});	
});