const http = require("http");

const app = require("./server");
const config = require("./server/config");
const port = config.port;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
