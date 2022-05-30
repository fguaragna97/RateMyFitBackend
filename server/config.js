require("dotenv").config();

const config = {
  port: process.env.PORT,
  dburl: process.env.DB_URL,
};

module.exports = config;
