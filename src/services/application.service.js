const emitter = require("../events/emitter");
const { randomUUID } = require("crypto");

const applications = [];

const createApplication = (data) => {
	const newApplicationObj = {
		id: randomUUID(),
		...data,
        createdAt: new Date()
	};

	applications.push(newApplicationObj);
    
	emitter.emit("application.created", newApplicationObj);

	return newApplicationObj;
};

module.exports = {
	createApplication,
};
