import { ActionIcon, AppShell, Button } from "@mantine/core"
import { MyHeader } from "./MyHeader"
import { MyNavbar } from "./MyNavbar"
import { io } from 'socket.io-client'
import { Input } from '@mantine/core';
import React, { useEffect, useState } from "react";
import { IconSend } from "@tabler/icons";

const socket = io("http://localhost:3001");

socket.on("connect", () => {
  console.log("socket.connectを出力");
  console.log(socket.connect());
})

const ChatRoom = () => {

  const [messageList, setMessageList] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("chat", (msg) => {
      setMessageList((messageList) => [...messageList, msg])
    })
  }, []);

  const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }

  const onClickSend = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const date = new Date();
    socket.emit("chat message", message);
    setMessage("");
  }

  return (
    <AppShell padding="md" fixed={false} navbar={<MyNavbar />} header={<MyHeader />}>
      <ul>
        {messageList.map((data, index) => {
          return <li key={index}>{data}</li>;
        })}
      </ul>
      <div className="flex">
        <Input sx={{ textAlign: "center" }} placeholder="" radius="lg" value={message} onChange={onChangeMessage} rightSection={
          <ActionIcon onClick={onClickSend}>
            <IconSend size={16} />
          </ActionIcon>
        } />
      </div>
    </AppShell>
  )
}
export default ChatRoom
