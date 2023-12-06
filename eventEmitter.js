const events = require("events");
const eventEmitter = new events.EventEmitter();

// create event handler
const logger = () => {
  console.log("logging info >");
}

// assign event handler
eventEmitter.on("log", logger);

// emit event
eventEmitter.emit("log");
