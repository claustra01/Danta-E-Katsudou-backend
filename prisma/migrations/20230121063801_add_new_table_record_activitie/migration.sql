-- CreateTable
CREATE TABLE "Activitie" (
    "id" TEXT NOT NULL,
    "dateTime" TIMESTAMP(3) NOT NULL,
    "place" TEXT NOT NULL,
    "misc" TEXT NOT NULL,
    "member" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "recordId" TEXT,

    CONSTRAINT "Activitie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserOnActiviteis" (
    "userId" TEXT NOT NULL,
    "activitieId" TEXT NOT NULL,

    CONSTRAINT "UserOnActiviteis_pkey" PRIMARY KEY ("userId","activitieId")
);

-- CreateTable
CREATE TABLE "Record" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Record_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Activitie" ADD CONSTRAINT "Activitie_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "Record"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnActiviteis" ADD CONSTRAINT "UserOnActiviteis_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnActiviteis" ADD CONSTRAINT "UserOnActiviteis_activitieId_fkey" FOREIGN KEY ("activitieId") REFERENCES "Activitie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
