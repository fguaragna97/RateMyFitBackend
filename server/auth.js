const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    if (decoded) {
      const id = decoded.id;
      req.id = id;
      next();
    } else {
      res.status(401);
      res.json({ error: "unauthorized" });
    }
  } else {
    res.status(401);
    res.json({ error: "unauthorized" });
  }
};

module.exports = {
  auth,
};
