const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const characters = [
  { name: "ginger", x: 0.59, y: 0.5 },
  { name: "cat", x: 0.69, y: 0.32 },
  { name: "troublemaker", x: 0.47, y: 0.16 },
];

async function main() {
  await prisma.characters.createMany({
    data: [
      { name: characters[0].name, x: characters[0].x, y: characters[0].y },
      { name: characters[1].name, x: characters[1].x, y: characters[1].y },
      { name: characters[2].name, x: characters[2].x, y: characters[2].y },
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
