const express = require("express");
const controller = require("./todoController");

const router = express.Router();

router.get("/",controller.get);

module.exports.router=router;