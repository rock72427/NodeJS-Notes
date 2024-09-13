const path = require("path");

let myPath = "assets/images/logo.jpg";

console.log(path.dirname(myPath)); // assets/images
console.log(path.extname(myPath)); // .jpg
console.log(path.basename(myPath)); // logo.jpg

console.log(path.sep); // \

console.log(path.join("src", myPath)); // src\assets\images\logo.jpg
console.log(path.join("..", myPath)); // ..\assets\images\logo.jpg
