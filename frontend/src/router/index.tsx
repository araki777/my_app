import { BrowserRouter, Route, Routes } from "react-router-dom";
import FileUpload from "../components/FileUpload";
import AppProviders from "../provider/AppProviders";

const AppRoutes = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
    { children }
    </BrowserRouter>
  )
}

export default AppRoutes
