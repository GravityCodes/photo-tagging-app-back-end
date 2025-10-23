const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const { validationResult } = require("express-validator");

const getLeaderboard = async (req, res) => {
  try {
    const result = await prisma.leaderboard.findMany({
      orderBy: [
        {
          time: "asc",
        },
      ],
    });

    return res.status(200).json(result);
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "A server error has occured. Please try again later." });
  }
};

const postLeaderboard = async (req, res) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, time } = req.body;

    await prisma.leaderboard.create({
      data: {
        name,
        time: Number(time),
      },
    });

    return res.status(201).json({ msg: "Created" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ msg: "A server error has occured. Please try again later." });
  }
};

module.exports = {
  getLeaderboard,
  postLeaderboard,
};
