const fs = require("fs");

// create
// sync
// console.log("start");
// fs.writeFileSync("./demo.txt", "HELLO WORLD !!!");
// console.log("end");

// async
console.log("start");
fs.writeFile("./virat.txt", "Best Batsman on the earth", (error) => {
  if (error) console.log(error);
  else console.log("file created");
});
console.log("end");
