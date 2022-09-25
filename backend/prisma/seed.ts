import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    email: "test1@example.com",
    name: "test1_user",
    Menus: {
      create: [
        {
          id: 1,
          name: "test1",
          icon: "test",
        },
        {
          id: 2,
          name: "test2",
          icon: "test",
        },
        {
          id: 3,
          name: "test3",
          icon: "test",
        },
      ],
    },
  },
  {
    email: "test2@example.com",
    name: "test2_user",
    Menus: { create: [{ id: 4, name: "test2", icon: "test" }] },
  },
  {
    email: "test3@example.com",
    name: "test3_user",
    Menus: { create: [{ id: 5, name: "test3", icon: "test" }] },
  },
];

async function main() {
  const users = [];
  for (const u of userData) {
    const user = prisma.user.create({
      data: u,
    });
    users.push(user);
  }
  return await prisma.$transaction(users);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
