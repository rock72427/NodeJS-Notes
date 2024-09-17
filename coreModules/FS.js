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

// ====================Read====================
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

// ====================Delete====================
// sync
// fs.unlinkSync("./demo.txt");

// async
// fs.unlink("./virat.txt", (error) => {
//   if (error) console.log(error);
//   else console.log("file deleted");
// });

// ====================Update====================
// fs.writeFileSync("./demo1.txt", "Hello");

// sync
// fs.appendFileSync("./demo1.txt", " World!!!");

// async
// fs.appendFile("./demo1.txt", "HAPPY ONAM", (error) => {
//   if (error) console.log(error);
//   else console.log("data updated");
// });

// ====================Rename====================
// sync
// fs.renameSync("./demo1.txt", "./demo2.txt");

// async
// fs.rename("./demo2.txt", "./demo.txt", (error) => {
//   if (error) console.log(error);
//   else console.log("file renamed");
// });

// ====================Copy====================
// sync
// fs.linkSync("./demo.txt", "./link1.txt");

// async
// fs.link("./link1.txt", "./link2.txt", (error) => {
//   if (error) console.log(error);
//   else console.log("file copied");
// });

// calling by value
// sync
// fs.copyFileSync("./demo.txt", "./copy.txt");

// async
// fs.copyFile("./demo.txt", "./copy1.txt", (error) => {
//   if (error) console.log(error);
//   else console.log("file copied");
// });

// ====================Copy====================
// create
// fs.mkdir("./myFolder", (error) => {
//   if (error) console.log(error);
//   else console.log("folder created");
// });

// delete
// fs.rmdir("./myFolder", (error) => {
//   if (error) console.log(error);
//   else console.log("folder deleted");
// });
