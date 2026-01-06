const express = require("express");
const applicationRoutes = require("./routes/application.routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
	res.status(200).json({ status: "ok" });
});

app.use("/api", applicationRoutes);

app.use(errorMiddleware);

module.exports = app;
