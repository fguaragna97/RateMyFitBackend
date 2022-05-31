const express = require("express");

const router = express.Router();
const postsRoutes = require("./posts/routes");
const usersRoutes = require("./users/routes");

router.use("/posts", postsRoutes);
router.use("/users", usersRoutes);

module.exports = router;
