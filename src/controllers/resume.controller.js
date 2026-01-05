const { saveResumeStream } = require("../services/resume-upload.service");
const NotFoundError = require("../errors/not-found-error");
const { getApplicationById } = require("../services/application.service");

const uploadResumeController = async (req, res, next) => {
	try {
		const { id } = req.params;

		const application = getApplicationById(id);
		if (!application) {
			throw new NotFoundError("Application not found! try again");
		}

		const resumePath = await saveResumeStream(req, id);
		application.resumePath = resumePath;

		res.status(200).json({
			success: true,
			message: "Resume uploaded successfully",
		});
	} catch (error) {
		next(error);
	}
};

module.exports = {
	uploadResumeController,
};
