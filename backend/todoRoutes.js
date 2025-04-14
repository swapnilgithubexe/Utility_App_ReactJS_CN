const express = require("express");
const controller = require("./todoController");

const router = express.Router();

router.get("/", controller.get);
router.post("/", controller.create);

module.exports.router = router;