import { Prisma, PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.use(express.json());

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// ユーザー情報一覧取得
app.get("/users", async (_req, res) => {
  const users = await prisma.user.findMany({ include: { Menus: true } });
  return res.json(users);
});

// ユーザー新規登録
app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    return res.json(user);
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        console.log(
          "There is a unique constraint violation, a new user cannot be created with this email"
        );
      }
    }
    return res.status(400).json(e);
  }
});

// ユーザー更新
app.put("/users/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { name } = req.body;
  try {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
    return res.json(user);
  } catch (e) {
    return res.status(400).json(e);
  }
});

// ユーザー削除
app.delete("/users/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });
    return res.json(user);
  } catch (e) {
    return res.status(400).json(e);
  }
});

// メニュー作成
app.post("/menus", async (req, res) => {
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
app.get("/menus/:id", async (req, res) => {
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

app.get("/files/:id", async (req, res) => {
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

app.post("/files/:id", async (req, res) => {
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

app.listen(port, () => console.log("Server is running"));
