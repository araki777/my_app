import { AppShell } from '@mantine/core'
import MyNavbar from './MyNavbar'
import MyHeader from './MyHeader'
import AppRoutes from '../router'
import { Route, Routes } from 'react-router-dom'
import FileUpload from './FileUpload'

const MyAppShell = () => {
  return (
    <AppRoutes>
      <AppShell padding="md" fixed={false} navbar={<MyNavbar />} header={<MyHeader />}>
        <Routes>
          <Route path="/upload" element={<FileUpload />}></Route>
        </Routes>
      </AppShell>
    </AppRoutes>
  )
}

export default MyAppShell
