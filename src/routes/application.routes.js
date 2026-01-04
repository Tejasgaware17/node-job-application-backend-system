const express = require("express");
const {
	createApplicationController,
} = require("../controllers/application.controller");
const validateCreateApplication = require("../middlewares/validate-application.middleware");

const router = express.Router();

router.post(
	"/applications",
	validateCreateApplication,
	createApplicationController
);

module.exports = router;
