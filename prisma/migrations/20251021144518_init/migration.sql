-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "Ycord" INTEGER NOT NULL,
    "Xcord" INTEGER NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Leaderboard" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "Leaderboard_pkey" PRIMARY KEY ("id")
);
