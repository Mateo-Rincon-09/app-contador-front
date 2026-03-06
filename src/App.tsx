import { Route, Routes } from "react-router-dom"
import {
  AhorroPage, DashboardPage, HistorialPage, HomePage, LoginPage, RegisterPage, UserPage
} from "./pages"
import AppContainer from "./components/AppContainer/AppContainer"

export const App = () => {
  return (
    <Routes>
      {/* Rutas publicas */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Rutas privadas con menu lateral */}
      <Route element={<AppContainer />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/ahorro" element={<AhorroPage />} />
        <Route path="/historial" element={<HistorialPage />} />
        <Route path="/user" element={<UserPage />} />
      </Route>
    </Routes>
  )
}