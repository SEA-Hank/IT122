const http = require("http");
const server = http.createServer((req, res) => {
  var path = req.url.toLowerCase();
  switch (path) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("This is IT122 Hank's home page");
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`This is IT122 Hank's about page\n\rI love coding`);
      break;
    default:
      res.writeHead(404, "Not found", { "Content-Type": "text/plain" });
      res.end();
      break;
  }
});
server.listen(3000);
