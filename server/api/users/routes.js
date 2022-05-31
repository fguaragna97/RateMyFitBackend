const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.route("/register").post(controller.register);

router.route("/login").post(controller.login);

router.route("/profile/:username").get(controller.read).put(controller.update);

module.exports = router;
