import { FC } from "react"
import { MessageContent } from "../../types/MessageContent"
import { Group, Space, Text } from "@mantine/core"

type Props = {
  messageContent: MessageContent
};

export const MessageBallon: FC<Props> = (props) => {
  const { messageContent } = props

  return (
    <Group color="white" px={3} py={1} spacing="xs" mb={2} align="center" sx={(_theme) => ({
      borderRadius: 4,
      boxShadow: "md"
    })}>
      <Text size="xs" color="gray" mr={1}>
        {messageContent.name}
      </Text>
      <Text size="sm">
        {messageContent.message}
      </Text>
      <Space />
      <Text size="xs">{messageContent.postAt}</Text>
    </Group>
  )
}
