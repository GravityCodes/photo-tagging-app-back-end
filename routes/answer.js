const { Router } = require('express');
const route = Router();
const controller = require("../controller/answer");


route.push("/", controller.checkAnswer);


module.exports = route;