const os = require("os");

console.log(os.arch()); // x64
console.log(os.hostname()); // DESKTOP-T3PG8M5
console.log(os.freemem()); // 1270587392
console.log(os.totalmem()); // 8317952000
console.log(os.cpus().length); // 8
console.log(os.platform()); // win32
console.log(os.type()); // Windows_NT
console.log(os.version()); // Windows 10 Pro
