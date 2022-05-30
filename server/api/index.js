const express = require("express");

const router = express.Router();
const postRoutes = require("./posts/routes");

router.use("/posts", postRoutes);

module.exports = router;
