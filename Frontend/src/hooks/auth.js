import { createContext, useContext, useEffect, useState } from "react"

import { api } from "../services/api"

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [userData, setUserData] = useState({})

  const signUp = async ({ email, password }) => {
    try {
      const response = await api.post("/authenticate", {
        email,
        password,
      })
      const { user, token } = response.data

      localStorage.setItem("@lupetmovies:user", JSON.stringify(user))
      localStorage.setItem("@lupetmovies:token", token)

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setUserData(user)
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message)
      } else {
        alert("Não foi possível logar!!")
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@lupetmovies:token")
    const user = localStorage.getItem("@lupetmovies:user")

    if (token && user) {
      api.defaults.common["Authorization"] = `Bearer ${token}`

      setUserData({ user: JSON.parse(user) })
    }
  }, [])

  return <AuthContext value={{ userData, signUp }}>{children}</AuthContext>
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
