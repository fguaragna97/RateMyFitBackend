const { Model } = require("./model");

exports.register = async (req, res) => {
  const { body = {} } = req;

  const doc = new Model(body);

  const response = await doc.save();

  res.status(201);
  res.json({
    data: response,
  });
};

exports.login = async (req, res, next) => {
  const { body = {} } = req;
  const { email, username, password } = body;

  const doc = await Model.findOne({
    $or: [{ email }, { username }],
    $and: [
      {
        password,
      },
    ],
  });

  if (doc) {
    const token = jwt.sign({ id: doc._id }, process.env.TOKEN_SECRET);
    res.json({
      data: doc,
      token,
    });
  } else {
    next({
      statusCode: 404,
      message: "User not found",
    });
  }
};

exports.read = async (req, res, next) => {
  const { params = {} } = req;
  const { username } = params;

  const doc = await Model.findOne({ username });

  if (doc) {
    res.json({
      data: doc,
    });
  } else {
    next({
      statusCode: 404,
      message: "User not found",
    });
  }
};

exports.update = async (req, res) => {
  const { body = {}, params = {} } = req;
  const { username } = params;

  const doc = await Model.findOneAndUpdate({ username }, body, { new: true });

  res.json({
    data: doc,
  });
};
