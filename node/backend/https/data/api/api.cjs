const http = require("http");
const argv = require('node:process');

const data = require("../inventory");

http.createServer((req, res) => {
  if (req.url === "/inStock"){
		res.writeHead(200, {"Content-Type": "text/json"});
    const info = JSON.stringify(data);
    let returned = [];
    for (const item in info){
      if (item.avail === "inStock") {
        returned.push(item);
      }
    }
    res.end(returned);
  } else if ("/backorder") {
    const info = JSON.stringify(data);
    let returned = [];
    for (const item in info){
      if (item.avail === "backorder") {
        returned.push(item);
      }
    }
    res.writeHead(200, {"Content-Type": "text/json"});
    res.end(`${returned}`);
  } else if ("/") {
		res.writeHead(200, {"Content-Type": "text/json"});
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end("404 File Not Found");
  }
}).listen(argv[2]);

console.log(`Server listening on port ${argv[2]}`);