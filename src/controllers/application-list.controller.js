const { listApplications } = require("../services/application.service");

const listApplicationsController = (req, res, next) => {
	try {
		const { role, limit, offset } = req.query;

		const result = listApplications({ role, limit, offset });

		res.status(200).json({
			success: true,
			total: result.total,
			data: result.data,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = {
	listApplicationsController,
};
