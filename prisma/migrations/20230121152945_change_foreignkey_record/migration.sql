/*
  Warnings:

  - You are about to drop the column `userId` on the `Record` table. All the data in the column will be lost.
  - Added the required column `lineId` to the `Record` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Record" DROP CONSTRAINT "Record_userId_fkey";

-- AlterTable
ALTER TABLE "Record" DROP COLUMN "userId",
ADD COLUMN     "lineId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_lineId_fkey" FOREIGN KEY ("lineId") REFERENCES "User"("lineID") ON DELETE RESTRICT ON UPDATE CASCADE;
