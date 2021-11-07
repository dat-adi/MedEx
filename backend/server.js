const app = require("./app");
const dotenv = require("dotenv");

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
	console.log(`ERROR: ${err.stack}`);
	console.log("Shutting down server due to uncaught exceptions.");
	process.exit(1);
});

// Setting up the configuration files
dotenv.config({ path: "./config/config.env" });

app.listen(process.env.PORT, () => {
	console.log(
		`MedEx has started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode!`
	);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
	console.log(`ERROR: ${err.message}`);
	console.log("Shutting down the server due to unhandled promise rejection");
	server.close(() => {
		process.exit(1);
	});
});
