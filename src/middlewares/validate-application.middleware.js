const ValidationError = require("../errors/validation-error");

const validateCreateApplication = (req, res, next) => {
	const { name, email, role } = req.body || {};

	if (!name || typeof name !== "string") {
		throw new ValidationError("Name is required and must be a string");
	}

	if (!email || typeof email !== "string") {
		throw new ValidationError("Email is required and must be a string");
	}

	if (!role || typeof role !== "string") {
		throw new ValidationError("Role is required and must be a string");
	}

	next();
};

module.exports = validateCreateApplication;
