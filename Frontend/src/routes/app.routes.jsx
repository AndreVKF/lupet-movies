import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { Perfil } from "../pages/Perfil"
import { MoviePreview } from "../pages/MoviePreview"
import { CreateMovie } from "../pages/CreateMovie"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/preview/:id" element={<MoviePreview />} />
      <Route path="/create" element={<CreateMovie />} />
    </Routes>
  )
}
