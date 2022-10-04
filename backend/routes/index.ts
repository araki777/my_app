import express from "express";
import cors from "cors";
import user from './api/user'
import menu from './api/menu'
import file from './api/file'

const app = express();
const port = 3000;


app.use(express.json());

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use('/api/users', user)
app.use('/api/menus', menu)
app.use('/api/files', file)

app.listen(port, () => console.log("Server is running"));
