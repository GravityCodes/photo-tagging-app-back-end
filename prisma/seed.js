const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

const characters = [
  { name: "ginger", x: 0.59, y: 0.5 },
  { name: "cat", x: 0.79, y: 0.32 },
  { name: "troublemaker", x: 0.47, y: 0.16 },
];

async function main() {
  await prisma.character.createMany({
    data: [
      {
        name: characters[0].name,
        Xcoord: characters[0].x,
        Ycoord: characters[0].y,
      },
      {
        name: characters[1].name,
        Xcoord: characters[1].x,
        Ycoord: characters[1].y,
      },
      {
        name: characters[2].name,
        Xcoord: characters[2].x,
        Ycoord: characters[2].y,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
