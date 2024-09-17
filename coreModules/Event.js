const event = require("events");
const eventEmitter = new event();

// Create events
eventEmitter.on("myEvent", () => {
  console.log("myEvent is executed");
});

eventEmitter.addListener("print", () => {
  console.log("print event is called");
});

eventEmitter.once("msg", () => {
  console.log("no msg to display");
});

// Emit events
// eventEmitter.emit("myEvent");
// eventEmitter.emit("print");
// eventEmitter.emit("print");
// eventEmitter.emit("msg");

// Define functions
function printMsg() {
  console.log("Hello World");
}

function printDate() {
  console.log(new Date());
}

// Add listeners
eventEmitter.on("event", printMsg);
eventEmitter.on("event", printDate);

eventEmitter.emit("event");

eventEmitter.removeAllListeners("event", printMsg);

eventEmitter.emit("event");
