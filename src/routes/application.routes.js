const express = require("express");
const {
	createApplicationController,
} = require("../controllers/application.controller");

const router = express.Router();

router.post("/applications", createApplicationController);

module.exports = router;
