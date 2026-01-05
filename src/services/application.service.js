const emitter = require("../events/emitter");
const { randomUUID } = require("crypto");

const applications = [];

const createApplication = (data) => {
	const newApplicationObj = {
		id: randomUUID(),
		...data,
		resumePath: data.resumePath || null,
		createdAt: new Date(),
	};

	applications.push(newApplicationObj);

	emitter.emit("application.created", newApplicationObj);

	return newApplicationObj;
};

module.exports = {
	createApplication,
};
