require("./events/listeners");
const config = require("./config");
const app = require("./app");

const server = app.listen(config.port, () => {
	console.log(`Server listening on port ${config.port}`);
});

let isShuttingDown = false;

const shutdown = (signal) => {
	if (isShuttingDown) return;
	isShuttingDown = true;

	console.log(`\nReceived ${signal}. Starting graceful shutdown...`);

	const forceExitTimer = setTimeout(() => {
		console.error("Shutdown timed out. Forcefully exiting.");
		process.exit(1);
	}, 10000);

	server.close((err) => {
		clearTimeout(forceExitTimer);

		if (err) {
			console.error("Error during server close:", err);
			process.exit(1);
		}

		console.log("HTTP server closed.");
		console.log("Graceful shutdown complete.");
		process.exit(0);
	});
};

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));

process.on("uncaughtException", (err) => {
	console.error("Uncaught Exception:", err);
	shutdown("uncaughtException");
});

process.on("unhandledRejection", (reason) => {
	console.error("Unhandled Rejection:", reason);
	shutdown("unhandledRejection");
});
