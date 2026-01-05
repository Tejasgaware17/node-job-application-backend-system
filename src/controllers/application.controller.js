const { createApplication } = require("../services/application.service");

const createApplicationController = (req, res, next) => {
	try {
		const application = createApplication(req.body);

		res.status(201).json({
			success: true,
			data: application,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = {
	createApplicationController,
};
