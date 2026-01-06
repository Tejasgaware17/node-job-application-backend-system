const path = require("path");

const config = {
	env: process.env.NODE_ENV || "development",
	port: process.env.PORT || 3000,

	paths: {
		logs: process.env.LOGS_DIR || path.join(__dirname, "../../logs"),
		uploads: process.env.UPLOADS_DIR || path.join(__dirname, "../../uploads"),
	},
};

module.exports = config;
