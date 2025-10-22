const { Router } = require("express");
const route = Router();
const controller = require("../controller/answer");

route.post("/", controller.checkAnswer);

module.exports = route;
