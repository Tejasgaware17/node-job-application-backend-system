require("./events/listeners");

const app = require("./app");

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});

const shutdown = (signal) => {
	console.log(`Received ${signal}, shutting down...`);

	server.close(() => {
		console.log("Server closed.");
		process.exit(0);
	});

	setTimeout(() => {
		console.log("Forcefully shutting down...");
		process.exit(1);
	}, 10000);
};

process.on('SIGINT', shutdown)
process.on('SIGTERM',shutdown)
