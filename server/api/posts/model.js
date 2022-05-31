const mongoose = require("mongoose");
const { Schema } = mongoose;

const fields = {
  caption: {
    type: String,
    required: true,
    trim: true,
  },
};

const PostSchema = new Schema(fields, {
  timestamps: true,
});

const Post = mongoose.model("Post", PostSchema);

module.exports = {
  fields,
  Model: Post,
};
