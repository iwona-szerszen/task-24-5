const calculateStylePoints = styleNotes => {
	
	const selectedNotes = (styleNotes.sort((a,b) => a - b)).slice(1, 4);

	return selectedNotes.reduce((a,b) => a + b);
};

module.exports = calculateStylePoints;