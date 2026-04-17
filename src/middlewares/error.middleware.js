const config = require("../config");

const errorMiddleware = (err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const isOperational = err.isOperational || false;

	if (!isOperational) {
		console.error("Unexpected Error:", err);
	}

	const response = {
		success: false,
		message:
			isOperational && err.message
				? err.message
				: "Internal Server Error",
	};

	if (config.env === "development") {
		response.stack = err.stack;
		response.statusCode = statusCode;
	}

	res.status(statusCode).json(response);
};

module.exports = errorMiddleware;
