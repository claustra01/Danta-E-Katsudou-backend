/*
  Warnings:

  - The primary key for the `UserOnActiviteis` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `UserOnActiviteis` table. All the data in the column will be lost.
  - Added the required column `lineId` to the `UserOnActiviteis` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserOnActiviteis" DROP CONSTRAINT "UserOnActiviteis_userId_fkey";

-- AlterTable
ALTER TABLE "UserOnActiviteis" DROP CONSTRAINT "UserOnActiviteis_pkey",
DROP COLUMN "userId",
ADD COLUMN     "lineId" TEXT NOT NULL,
ADD CONSTRAINT "UserOnActiviteis_pkey" PRIMARY KEY ("lineId", "activitieId");

-- AddForeignKey
ALTER TABLE "UserOnActiviteis" ADD CONSTRAINT "UserOnActiviteis_lineId_fkey" FOREIGN KEY ("lineId") REFERENCES "User"("lineID") ON DELETE RESTRICT ON UPDATE CASCADE;
