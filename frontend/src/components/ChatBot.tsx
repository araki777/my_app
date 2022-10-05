import { AppShell } from "@mantine/core"
import { MyHeader } from "./MyHeader"
import { MyNavbar } from "./MyNavbar"

const ChatBot = () => {
  return (
    <AppShell padding="md" fixed={false} navbar={<MyNavbar />} header={<MyHeader />} children={undefined}></AppShell>
  )
}

export default ChatBot
