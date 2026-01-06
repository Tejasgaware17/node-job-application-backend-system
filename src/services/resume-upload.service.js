const fs = require("fs");
const path = require("path");
const uploadDir = require("../utils/upload-dir");
const ValidationError = require("../errors/validation-error");

const saveResumeStream = (req, applicationId) => {
	const contentType = req.headers["content-type"];

	if (!contentType?.includes("application/pdf")) {
		throw new ValidationError("Only PDF resumes are allowed");
	}

	const filePath = path.join(uploadDir, `${applicationId}.pdf`);
	const writeStream = fs.createWriteStream(filePath);

	return new Promise((resolve, reject) => {
		req.pipe(writeStream);
		req.on("error", reject);

		writeStream.on("finish", () => {
			resolve(filePath);
		});

		writeStream.on("error", (err) => {
			writeStream.destroy();
			reject(err);
		});
	});
};

module.exports = {
	saveResumeStream,
};
