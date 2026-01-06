const errorMiddleware = (err, req, res, next) => {
	const statusCode = err.statusCode || 500;

	const message =
		typeof err.message === "string" && err.message.length > 0
			? err.message
			: "Internal Server Error";

	res.status(statusCode).json({
		success: false,
		message,
	});
};

module.exports = errorMiddleware;
