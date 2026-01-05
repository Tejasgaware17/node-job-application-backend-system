const fs = require("fs");
const path = require("path");
const config = require("../config");

const uploadDir = config.paths.uploads;

if (!fs.existsSync(uploadDir)) {
	fs.mkdirSync(uploadDir);
}

module.exports = uploadDir;
