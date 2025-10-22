const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const checkCoords = require("../utils/checkCoords");

const checkAnswer = async (req, res) => {
  try {
    const { name, x, y } = req.body;
    const character = await prisma.character.findUnique({
      where: {
        name,
      },
    });

    characterCoords = { x: character.Xcoord, y: character.Ycoord };
    playerCoords = { x, y };

    const result = checkCoords(characterCoords, playerCoords);

    return res.status(200).json({ msg: result });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ msg: "A server error has occured. Please try again later." });
  }
};

module.exports = {
  checkAnswer,
};
