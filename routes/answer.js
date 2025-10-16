const { Router } = require('express');
const route = Router();
const controller = require("../controller/answer");

route.get("/", controller.checkAnswer);

module.exports = route;