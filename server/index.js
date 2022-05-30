const express = require("express");
const app = express();

const api = require("./api");

app.use("/api", api);

app.use((req, res) => {
  res.status(404);
  res.json({
    error: "Route not Found",
  });
});

app.use((err, req, res) => {
  res.status(500);
  res.json({
    error: "Internal Server Error",
  });
});

module.exports = app;
