var http = require("http");

http.createServer(function(request, response){
  console.log("Request received" + Date.now());
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);
// if you run
// node server.js and then go to:
// http://localhost:8888/
// you will see your web server up and running

console.log("Server has started");

// We could refactor to:
//
// var http = require("http");
//
// function onRequest(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }
//
// http.createServer(onRequest).listen(8888);
