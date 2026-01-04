const { createApplication } = require("../services/application.service");

const createApplicationController = (req, res) => {
	try {
		const application = createApplication(req.body);

		res.status(201).json({
			success: true,
			data: application,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Failed to create application",
		});
	}
};

module.exports = {
	createApplicationController,
};
