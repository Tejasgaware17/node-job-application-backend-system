const emitter = require("./emitter");
const logger = require("../utils/logger");

const handleApplicationCreated = (application) => {
	logger.info("Application created", {
		applicationId: application.id,
	});
};

const sendConfirmationEmail = (application) => {
	logger.info("Confirmation email sent", {
		applicationId: application.id,
	});
};

const trackAnalytics = (application) => {
	logger.info("Analytics tracked", {
		applicationId: application.id,
	});
};

emitter.on("application.created", handleApplicationCreated);
emitter.on("application.created", sendConfirmationEmail);
emitter.on("application.created", trackAnalytics);

emitter.on("application.resume_uploaded", ({ applicationId, resumePath }) => {
	logger.info("Resume uploaded", {
		applicationId,
		resumePath,
	});
});
