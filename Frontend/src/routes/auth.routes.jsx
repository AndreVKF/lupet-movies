import { Routes, Route } from "react-router-dom"

import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/SignUp"
import { NotFound } from "../pages/NotFound"

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<SignIn />} />
      <Route path="/" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
