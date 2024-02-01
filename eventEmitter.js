const events = require("events");
const eventEmitter = new events.EventEmitter();

// create event handler
const logger = (data) => {
	console.log("logging info > ", data.status);
}

// assign event handler
eventEmitter.on("log", logger);

// emit event
eventEmitter.emit("log", {
	status: "okay"
});
