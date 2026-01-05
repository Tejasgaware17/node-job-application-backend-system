const express = require("express");
const {
	createApplicationController,
} = require("../controllers/application.controller");
const { uploadResumeController } = require("../controllers/resume.controller");
const { listApplicationsController } = require("../controllers/application-list.controller");
const validateCreateApplication = require("../middlewares/validate-application.middleware");

const router = express.Router();

router.post(
	"/applications",
	validateCreateApplication,
	createApplicationController
);

router.post("/applications/:id/resume", uploadResumeController);

router.get('/applications', listApplicationsController)

module.exports = router;
