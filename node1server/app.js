//create and manage http server
//creating a server using http module
//here resp.wrtie and end are two main method used to handle the HTTP response
//resp.write used to send some data to the client in front
//resp.end used to end the data after that you cant send more data
//req and resp are object here to handle http req and resp
const http = require("http");
//create a http server
const server = http.createServer((req, resp) => {
  resp.write("<h1>This is the main heading</h1>");
  resp.end();
});
//start the server in port 5000
server.listen(5000, () => {
  console.log("this is my website");
});
