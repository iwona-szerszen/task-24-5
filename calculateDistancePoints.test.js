const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
	describe('hillSize: normal', () => {
		it('should work if distance is greater than or equal to kPoint', () => {
			const actual = calculateDistancePoints(111, 'normal', 98);

			const expected = 86;

			assert.equal(actual, expected);
		});

		it('should work if distance is smaller than kPoint', () => {
			const actual = calculateDistancePoints(93, 'normal', 98);

			const expected = 50;

			assert.equal(actual, expected);
		});
	});

	describe('hillSize: big', () => {
		it('should work if distance is greater than or equal to kPoint', () => {
			const actual = calculateDistancePoints(134, 'big', 120);

			const expected = 85.2;

			assert.equal(actual, expected);
		});

		it('should work if distance is smaller than kPoint', () => {
			const actual = calculateDistancePoints(118, 'big', 120);

			const expected = 56.4;

			assert.equal(actual, expected);
		});
	});

	describe('hillSize: mammoth', () => {
		it('should work if distance is greater than or equal to kPoint', () => {
			const actual = calculateDistancePoints(227.5, 'mammoth', 200);

			const expected = 153;

			assert.equal(actual, expected);
		});

		it('should work if distance is smaller than kPoint', () => {
			const actual = calculateDistancePoints(197, 'mammoth', 200);

			const expected = 116.4;

			assert.equal(actual, expected);
		});	
	});
	
});