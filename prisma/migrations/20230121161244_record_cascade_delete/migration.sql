-- DropForeignKey
ALTER TABLE "Activitie" DROP CONSTRAINT "Activitie_recordId_fkey";

-- AddForeignKey
ALTER TABLE "Activitie" ADD CONSTRAINT "Activitie_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "Record"("id") ON DELETE CASCADE ON UPDATE CASCADE;
