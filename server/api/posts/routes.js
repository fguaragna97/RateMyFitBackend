const express = require("express");
const router = express.Router();
const controller = require("./controller");
const auth = require("../../auth");

router.route("/").get(controller.all).post(auth, controller.create);

router
  .route("/:id")
  .get(controller.id, controller.read)
  .put(controller.id, controller.update)
  .delete(controller.id, controller.delete);

module.exports = router;
