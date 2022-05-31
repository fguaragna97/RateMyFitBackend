const express = require("express");
const api = require("./api");

const app = express();

app.use(express.json());

app.use("/api", api);

app.use((req, res) => {
  res.status(404);
  res.json({
    error: "Route not Found",
  });
});

app.use((err, req, res, next) => {
  console.log(JSON.stringify(err, null, 2));
  const { message = "Internal Server Error", statusCode = 500 } = err;

  res.status(statusCode);
  res.json({
    error: message,
  });
});

module.exports = app;
