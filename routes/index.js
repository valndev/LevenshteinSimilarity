const router = require('express').Router();
const levenshtein = require('../levenshtein.js');

// GET
router.get('/:percentage', async (req, res) => {
	const { percentage } = req.params;
	if (percentage < 0 || percentage > 100 || isNaN(percentage)) {
		return res.status(400).json({
			error: 'Use a percentage between 0 and 100.',
			similarityPercentage: null,
			response: null,
		});
	}

	const { str1, str2 } = req.body;

	if (!str1 || !str2) {
		return res.status(400).json({
			error: 'Invalid JSON.',
			similarityPercentage: null,
			response: null,
		});
	}

	const similarityPercentage = levenshtein(str1, str2);

	if (similarityPercentage >= percentage) {
		return res.status(200).json({
			error: null,
			similarityPercentage,
			response: true,
		});
	}

	return res.status(200).json({
		error: null,
		similarityPercentage,
		response: false,
	});
});

module.exports = router;
