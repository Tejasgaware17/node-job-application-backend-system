require("./events/listeners");
const config = require("./config");

const app = require("./app");

const server = app.listen(config.port, () => {
	console.log(`Server listening on port ${config.port}`);
});

const shutdown = (signal) => {
	console.log(`Received ${signal} shutting down...`);

	server.close(() => {
		console.log("Server closed.");
		process.exit(0);
	});

	setTimeout(() => {
		console.log("Forcefully shutting down...");
		process.exit(1);
	}, 10000);
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
