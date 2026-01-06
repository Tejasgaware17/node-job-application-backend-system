const emitter = require("../events/emitter");
const { randomUUID } = require("crypto");

const applications = [];

const createApplication = (data) => {
	const { name, email, role } = data;

	const newApplicationObj = {
		id: randomUUID(),
		name,
		email,
		role,
		resumePath: null,
		createdAt: new Date(),
	};

	applications.push(newApplicationObj);

	emitter.emit("application.created", newApplicationObj);

	return newApplicationObj;
};

const getApplicationById = (id) => {
	return applications.find((app) => app.id === id);
};

const listApplications = ({ role, limit = 10, offset = 0 }) => {
	let result = applications;

	if (role) {
		result = result.filter((app) => app.role === role);
	}

	result = [...result].sort((a, b) => b.createdAt - a.createdAt);

	const start = Number(offset) || 0;
	const end = start + (Number(limit) || 10);

	return {
		total: result.length,
		data: result.slice(start, end),
	};
};

module.exports = {
	createApplication,
	getApplicationById,
	listApplications,
};
