import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { Perfil } from "../pages/Perfil"
import { MoviePreview } from "../pages/MoviePreview"
import { CreateMovie } from "../pages/CreateMovie"
import { UpdateMovie } from "../pages/UpdateMovie"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/preview/:movie_note_id" element={<MoviePreview />} />
      <Route path="/create" element={<CreateMovie />} />
      <Route path="/update/:movie_note_id" element={<UpdateMovie />} />
    </Routes>
  )
}
