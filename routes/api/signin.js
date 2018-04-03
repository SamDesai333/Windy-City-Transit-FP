const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/signup")
  .post(userController.create);

router.route("/user")
  .post(userController.findOne)


module.exports = router;
