const router = require("express").Router();
const wctRoutes = require("./signin");

router.use("/signin", wctRoutes);

module.exports = router;