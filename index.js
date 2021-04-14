const data = require("./ data");
const http = require("http");
const querystring = require("querystring");
const server = http.createServer((req, res) => {
  let path = req.url.toLowerCase().split("?");
  // let regex = /^(\/detail)\?id=(\d+)$/;
  switch (path[0]) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write("get the detail by id [1-8], example: /detail?id=1\n\n");
      res.end(JSON.stringify(data.getAll(), null, 2));
      break;
    case "/detail":
      let param = querystring.parse(path[1]);
      res.write("get the detail by id [1-8], example: /detail?id=1\n\n");
      res.end(JSON.stringify(data.getItem(param.id), null, 2));
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
