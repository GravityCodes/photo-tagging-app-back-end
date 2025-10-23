const {Router} = require("express");
const route = Router();
const controller = require("../controller/leaderboard");

route.get("/", controller.getLeaderboard);
route.post("/", controller.postLeaderboard);

module.exports = route;