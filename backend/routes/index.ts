import express from "express";
import cors from "cors";
import http from 'http';
import { Server } from 'socket.io';
import user from './api/user'
import menu from './api/menu'
import file from './api/file'

const app = express();
const apiPort = 3000;
const socketPort = 3001;
const server = http.createServer(app);


app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use('/api/users', user)
app.use('/api/menus', menu)
app.use('/api/files', file)

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  })

  socket.on("chat message", (msg) => {
    io.emit("chat", msg)
  })
})

app.listen(apiPort, () => console.log("Server is running"));
server.listen(socketPort, () => console.log("Server is running"))
