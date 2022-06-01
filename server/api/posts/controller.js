const { Model } = require("./model");

exports.all = async (req, res) => {
  const response = await Model.find().populate("author").exec();

  res.json({
    data: response,
  });
};

exports.create = async (req, res) => {
  const { body = {} } = req;

  const doc = new Model(body);

  const response = await doc.save();

  res.status(201);
  res.json({
    data: response,
  });
};

exports.id = async (req, res, next) => {
  const { params = {} } = req;
  const { id = "" } = params;

  const doc = await Model.findById(id);
  if (doc) {
    next();
  } else {
    next({
      message: `${Model.modelName} not Found`,
      statusCode: 404,
    });
  }
};

exports.read = async (req, res, next) => {
  const { params = {} } = req;
  const { id = "" } = params;

  const doc = await Model.findById(id);

  res.json({
    data: doc,
  });
};

exports.update = async (req, res) => {
  const { body = {}, params = {} } = req;
  const { id = "" } = params;

  const doc = await Model.findOneAndUpdate({ _id: id }, body, { new: true });

  res.json({
    data: doc,
  });
};

exports.delete = async (req, res) => {
  const { body = {}, params = {} } = req;
  const { id = "" } = params;
  const doc = await Model.findOneAndDelete({ _id: id });

  res.status(204);
  res.end();
};
