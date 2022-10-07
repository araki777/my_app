import { Box } from "@mantine/core";
import { FC } from "react";
import { MessageContent } from "../../types/MessageContent"
import { MessageBallon } from "../molecules/MessageBallon"

type Props = {
  messageList: MessageContent[];
}

export const MessageListArea: FC<Props> = (props) => {
  const { messageList } = props;
  return (
    <ul>
      <Box mx={20} my={40} color={"gray"} sx={(theme) => ({
        borderRadius: 4,
        border: "none",
        borderColor: "orange",
        minHeight: 200,
        width: "auto",
        padding: 4,
        boxShadow: "orange"
      })}>
        {messageList.map((messageContent, index) => {
          return <MessageBallon key={index} messageContent={messageContent}></MessageBallon>
        })}
      </Box>
    </ul>
  )
}
