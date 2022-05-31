const mongoose = require("mongoose");
const { Schema } = mongoose;

const fields = {
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
};

const UserSchema = new Schema(fields, {
  timestamps: true,
});

const User = mongoose.model("User", UserSchema);

module.exports = {
  fields,
  Model: User,
};
