const emitter = require("./emitter");

const handleApplicationCreated = (application) => {
	console.log(
		`Handling application created - Application ID: ${application.id}`
	);
};

const sendConfirmationEmail = (application) => {
	console.log(`Sending confirmation email - Application ID: ${application.id}`);
};

const trackAnalytics = (application) => {
	console.log(`Tracking analytics - Application ID: ${application.id}`);
};

emitter.on("application.created", handleApplicationCreated);
emitter.on("application.created", sendConfirmationEmail);
emitter.on("application.created", trackAnalytics);
