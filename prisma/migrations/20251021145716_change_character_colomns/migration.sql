/*
  Warnings:

  - You are about to drop the column `Xcord` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `Ycord` on the `Character` table. All the data in the column will be lost.
  - Added the required column `Xcoord` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Ycoord` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Character" DROP COLUMN "Xcord",
DROP COLUMN "Ycord",
ADD COLUMN     "Xcoord" INTEGER NOT NULL,
ADD COLUMN     "Ycoord" INTEGER NOT NULL;
