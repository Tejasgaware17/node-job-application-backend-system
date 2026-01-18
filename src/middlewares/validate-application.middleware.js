const ValidationError = require("../errors/validation-error");

const validateCreateApplication = (req, res, next) => {
	try {
		const { name, email, role } = req.body || {};

		if (!name || typeof name !== "string" || !name.trim()) {
			throw new ValidationError(
				"Name is required and must be a non-empty string"
			);
		}

		if (!email || typeof email !== "string" || !email.trim()) {
			throw new ValidationError(
				"Email is required and must be a non-empty string"
			);
		}

		if (!role || typeof role !== "string" || !role.trim()) {
			throw new ValidationError(
				"Role is required and must be a non-empty string"
			);
		}

		next();
	} catch (err) {
		next(err);
	}
};

module.exports = validateCreateApplication;
