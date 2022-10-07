import { ActionIcon } from "@mantine/core"
import { io } from 'socket.io-client'
import { Input } from '@mantine/core';
import React, { useEffect, useState } from "react";
import { IconSend } from "@tabler/icons";
import { useLocation } from "react-router-dom"
import { MessageListArea } from "../organisms/MessageListArea";
import { MessageContent } from "../../types/MessageContent";
import { MessageInputArea } from "../organisms/MessageInputArea";

type LoginState = {
  name: string
}

const socket = io("http://localhost:3001");
socket.on("connect", () => {
  console.log("socket.connectを出力");
  console.log(socket.connect());
})

const ChatRoom = () => {
  const [messageList, setMessageList] = useState<MessageContent[]>([]);
  const [message, setMessage] = useState("");
  const location = useLocation();
  const state = location.state as LoginState
  const { name } = state;

  useEffect(() => {
    socket.on("chat", (messageContent) => {
      setMessageList((messageList) => [...messageList, messageContent])
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
    const messageContent: MessageContent = {
      name: name,
      message: message,
      postAt: date.toLocaleString("ja"),
    };

    socket.emit("chat message", messageContent);
    setMessage("");
  }

  return (
    <>
      <MessageListArea messageList={messageList} />
      <MessageInputArea text={message} onChange={onChangeMessage} onClick={onClickSend} />
      <div className="flex">
        <Input sx={{ textAlign: "center" }} placeholder="" radius="lg" value={message} onChange={onChangeMessage} rightSection={
          <ActionIcon onClick={onClickSend}>
            <IconSend size={16} />
          </ActionIcon>
        } />
      </div>
    </>
  )
}
export default ChatRoom
