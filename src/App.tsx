import { Route, Routes } from "react-router-dom"
import {
  AhorroPage, DashboardPage, HistorialPage, HomePage, LoginPage, RegisterPage, UserPage
} from "./pages"


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/ahorro" element={<AhorroPage />} />
      <Route path="/historial" element={<HistorialPage />} />
    </Routes>
  )
}