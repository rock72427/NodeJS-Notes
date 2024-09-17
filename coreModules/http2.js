const http = require("http");

const server = http.createServer((req, res) => {
  const { url, method } = req;
  console.log(url, method);
  if (method == "GET") {
    if (url == "/") {
      res.write("<h1>Hello World</h1>");
      res.write("<h1>Node server</h1>");
      res.end();
    }
    if (url == "/contact") {
      res.write("<h1>Contact Us</h1>");
      res.write("<p>Phone: 1234567890</p>");
      res.write("<p>Email: contact@node.com</p>");
      res.end();
    }
  }
});

const port = 7000;

server.listen(port, () => {
  console.log(`Server is working on port http://localhost:${port}`);
});
