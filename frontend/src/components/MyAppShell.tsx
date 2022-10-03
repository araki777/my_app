import { AppShell } from '@mantine/core'
import { MyNavbar } from './MyNavbar'
import { MyHeader } from './MyHeader'

const MyAppShell = () => {
  return (
    <>
      <AppShell padding="md" fixed={false} navbar={<MyNavbar />} header={<MyHeader />}>
      </AppShell>
    </>
  )
}

export default MyAppShell
