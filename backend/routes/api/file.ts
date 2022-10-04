import express from 'express'
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const files = await prisma.file.findMany({
      where: {
        userId: id
      }
    });
    return res.json(files)
  } catch (e) {
    return res.status(400).json(e)
  }
})

router.post("/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const file = await prisma.file.create({
      data: {
        name: req.body.name,
        userId: id
      }
    });
    await prisma.fileDetails.create({
      data: {
        fileId: file.id,
        fileJson: req.body.fileData
      }
    });
    return res.json(file);
  } catch (e) {
    return res.status(400).json(e);
  }
});

export default router
