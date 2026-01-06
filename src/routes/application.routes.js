const express = require("express");
const validateCreateApplication = require("../middlewares/validate-application.middleware");
const { createApplicationController } = require("../controllers/application.controller");
const { uploadResumeController } = require("../controllers/resume.controller");
const { listApplicationsController } = require("../controllers/application-list.controller");

const router = express.Router();

router.get("/applications", listApplicationsController);

router.post(
	"/applications",
	validateCreateApplication,
	createApplicationController
);

router.post("/applications/:id/resume", uploadResumeController);

module.exports = router;
