const { answer } = require("../routes");
const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/answer", answer);

describe("Player selection gets propertly evaluated", () => {
  test("Player gets position wrong", async () => {
    const res = await request(app)
      .post("/answer")
      .type("form")
      .send({ name: "cat", x: 0.65, y: 0.12 });
    expect(res.body.msg).toBe(false);
  });

  test("Player gets position right", async () => {
    const res = await request(app)
      .post("/answer")
      .type("form")
      .send({ name: "cat", x: 0.62, y: 0.38 });
    expect(res.body.msg).toBe(true);
  });
});
