import express from 'express'
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// メニュー作成
router.post("/", async (req, res) => {
  const { id, name, userId, icon } = req.body;
  try {
    const menu = await prisma.menu.create({
      data: {
        id,
        name,
        userId,
        icon
      },
    });
    return res.json(menu);
  } catch (e) {
    return res.status(400).json(e);
  }
});

// メニュー詳細
router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const user = await prisma.menu.findMany({
      where: {
        userId: id as number,
      },
    });
    return res.json(user);
  } catch (e) {
    return res.status(400).json(e);
  }
});

export default router
