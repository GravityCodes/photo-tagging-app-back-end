require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/answer", routes.answer);
app.use("/leaderboard", routes.leaderboard);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
