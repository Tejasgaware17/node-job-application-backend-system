const fs = require("fs");
const config = require("../config");

const uploadDir = config.paths.uploads;

if (!fs.existsSync(uploadDir)) {
	fs.mkdirSync(uploadDir, { recursive: true });
}

module.exports = uploadDir;
