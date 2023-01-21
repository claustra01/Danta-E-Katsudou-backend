import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'hoge1',
    picture: 'sample.com',
    lineID: 'testID',
  },
  {
    name: 'hoge2',
    lineID: '123456789',
  },
  {
    name: 'hoge3',
    lineID: '234567891',
  },
];
