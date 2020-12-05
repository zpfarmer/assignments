let http = require("http")

http.createServer(function (request, response) { 
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World')
}).listen(8081);

console.log("Hello World")
console.log("Server is running at 8081")