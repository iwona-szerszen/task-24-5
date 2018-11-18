const calculateDistancePoints = (distance, hillSize, kPoint) => {

	const addOrSubstractJumpPoints = (startPoints, distance, kPoint, hillFactor) => {
		return startPoints + hillFactor * (distance - kPoint);
	};

	switch (hillSize) {
		case 'normal':
			return addOrSubstractJumpPoints(60, distance, kPoint, 2);
			break;
		case 'big':
			return addOrSubstractJumpPoints(60, distance, kPoint, 1.8);
			break;
		case 'mammoth':
			return addOrSubstractJumpPoints(120, distance, kPoint, 1.2);
			break;
		default:
			console.log('Wrong entered hill size');
	}
};

module.exports = calculateDistancePoints;