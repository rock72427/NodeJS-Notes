const fs = require("fs");

// create
// sync
// console.log("start");
// fs.writeFileSync("./demo.txt", "HELLO WORLD !!!");
// console.log("end");

// async
// console.log("start");
// fs.writeFile("./virat.txt", "Best Batsman on the earth", (error) => {
//   if (error) console.log(error);
//   else console.log("file created");
// });
// console.log("end");

// ====================read====================
// sync
// let data = fs.readFileSync("./demo.txt");
// console.log(data); // <Buffer 48 45 4c 4c 4f 20 57 4f 52 4c 44 20 21 21 21>
// console.log(data.toString()); // HELLO WORLD !!!

// let data = fs.readFileSync("./demo.txt", "utf-8");
// console.log(data);

// async
// fs.readFile("./demo1.txt", "utf-8", (error, data) => {
//   if (error) console.log(error);
//   else console.log(data);
// });

// ====================delete====================
// sync
// fs.unlinkSync("./demo.txt");

// async
fs.unlink("./virat.txt", (error) => {
  if (error) console.log(error);
  else console.log("file deleted");
});
