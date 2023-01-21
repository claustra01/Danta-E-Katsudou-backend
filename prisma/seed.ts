import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'hoge1',
    lineID: 'hoge1@example.com',
  },
  {
    name: 'hoge2',
    lineID: 'hoge2@example.com',
  },
  {
    name: 'hoge3',
    lineID: 'hoge3@example.com',
  },
];
