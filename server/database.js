const mongoose = require("mongoose");

const connect = ({ dburl }) => {
  mongoose.connect(dburl, () => {
    console.log("Connected to the databse");
  });
};

const disconnect = () => {
  mongoose.connection.close();
};

module.exports = { connect, disconnect };
