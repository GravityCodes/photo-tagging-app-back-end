const { Router } = require("express");
const route = Router();
const controller = require("../controller/leaderboard");
const validator = require("../validator/leaderboard");

route.get("/", controller.getLeaderboard);
route.post("/", validator.player, controller.postLeaderboard);

module.exports = route;
