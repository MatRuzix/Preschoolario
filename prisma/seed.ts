import { PrismaClient } from "@prisma/client";

import { children, users, groups } from "./seedingData";

const prisma = new PrismaClient();

async function seed() {
  await prisma.$transaction([
    prisma.child.deleteMany(),
    prisma.user.deleteMany(),
    prisma.group.deleteMany(),
  ]);
  for (let child of children) {
    await prisma.child.create({ data: child });
  }
  for (let user of users) {
    await prisma.user.create({ data: user });
  }
  for (let group of groups) {
    await prisma.group.create({ data: group });
  }
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
