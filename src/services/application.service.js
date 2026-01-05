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

const getApplicationById = (id) => {
	return applications.find((app) => app.id === id);
};

module.exports = {
	createApplication,
	getApplicationById,
};
