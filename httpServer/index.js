const http = require("http");
const fs = require("fs");

const app = http.createServer((req, res) => {
  const { method, url } = req;
  console.log(url, method);

  if (method == "GET") {
    if (url == "/") {
      const data = fs.readFileSync("./httpServer/pages/index.html");
      res.write(data);
      res.end();
    }
    if (url == "/about") {
      const data = fs.readFileSync("./httpServer/pages/about.html");
      res.write(data);
      res.end();
    }
    if (url == "/contact") {
      const data = fs.readFileSync("./httpServer/pages/contact.html");
      res.write(data);
      res.end();
    }
    if (url == "/login") {
      const data = fs.readFileSync("./httpServer/pages/login.html");
      res.write(data);
      res.end();
    }
    if (url == "/signup") {
      const data = fs.readFileSync("./httpServer/pages/signup.html");
      res.write(data);
      res.end();
    }
    if (url == "/index.css") {
      const data = fs.readFileSync("./httpServer/css/index.css");
      res.end(data);
    }
  } else if (method == "POST") {
    if (url == "/data") {
      req.on("data", (data) => {
        let userData = JSON.parse(data.toString());
        console.log(userData);

        let users = JSON.parse(
          fs.readFileSync("./httpServer/users.json", "utf-8")
        );
        let existingUser = users.find((user) => user.email === userData.email);

        if (existingUser) {
          res.write(JSON.stringify({ message: "User already exists" }));
          console.log("User already exists");
        } else {
          users.push(userData);
          fs.writeFileSync("./httpServer/users.json", JSON.stringify(users));
          res.write(JSON.stringify({ message: "Data Recieved" }));
        }

        res.end();
      });
    }
  }
});
const port = 8000;
app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
