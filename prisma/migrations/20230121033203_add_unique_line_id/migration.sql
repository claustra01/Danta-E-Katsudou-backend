/*
  Warnings:

  - A unique constraint covering the columns `[lineID]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_lineID_key" ON "User"("lineID");
