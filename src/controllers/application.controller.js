const { createApplication } = require("../services/application.service");
const ValidationError = require("../errors/validation-error");

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
