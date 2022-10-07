import { BrowserRouter, Route, Routes } from "react-router-dom";
import FileUpload from "../components/FileUpload";
import FileTable from "../components/FileTable";
import MyAppShell from "../components/MyAppShell";
import Page404 from "../components/Page404";
import FileDetailTable from "../components/FileDetailTable";
import ChatLoginPage from "../components/pages/ChatLoginPage";
import ChatRoom from "../components/pages/ChatRoom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyAppShell />} />
        <Route path="/upload" element={<FileUpload />} />
        <Route path="/file_table">
          <Route path=""  element={<FileTable />} />
          <Route path="details:id" element={<FileDetailTable />} />
        </Route>
        <Route path="/chat_login_page" element={<ChatLoginPage />} />
        <Route path="/chat_room" element={<ChatRoom />}></Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
