const fs = require("fs");
const path = require("path");
const config = require("../config");

const logDir = config.paths.logs;

if (!fs.existsSync(logDir)) {
	fs.mkdirSync(logDir, { recursive: true });
}

const logFilePath = path.join(logDir, "application.log");

const writeLog = (level, message, meta = {}) => {
	const logEntry = {
		timestamp: new Date().toISOString(),
		level,
		message,
		...meta,
	};

	fs.appendFile(logFilePath, JSON.stringify(logEntry) + "\n", (error) => {
		if (error) {
			console.error("Failed to write log", error);
		}
	});
};

module.exports = {
	info: (message, meta) => {
		writeLog("INFO", message, meta);
	},
	error: (message, meta) => {
		writeLog("ERROR", message, meta);
	},
};
