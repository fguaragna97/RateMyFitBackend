const http = require("http");

const app = require("./server");
const config = require("./server/config");
const database = require("./server/database");

const { dburl, port } = config;

// Connect to the database
database.connect({ dburl });

// Start http server
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
