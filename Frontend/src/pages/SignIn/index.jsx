import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FiMail, FiLock, FiUser } from "react-icons/fi"

import { Container, FormSide, Return } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ImageBackground } from "../../components/ImageBackground"
import { LoginHeader } from "../../components/LoginHeader"

import { ROUTES } from "../../utils/constants"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"

export const SignIn = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const { signUp } = useAuth

  const handleSignIn = async (e) => {
    e.preventDefault()

    if (!name || !email || !password) {
      alert("Preencha todos os campos!!")
      return
    }

    const requestCreateUser = await api.post(ROUTES.CREATE_USER, {
      name,
      email,
      password,
    })

    if (requestCreateUser.status !== 200) {
      if (requestCreateUser.response) {
        alert(requestCreateUser.response.data.message)
      } else {
        alert("Não foi possível cadastrar o usuário!!")
      }
      return
    }

    await signUp({ email, password })
    alert("Usuário cadastrado com sucesso!!")
    navigate("/")
  }

  return (
    <Container>
      <FormSide>
        <LoginHeader text="Crie sua conta" />

        <form>
          <Input
            type="text"
            placeholder="Nome"
            icon={FiUser}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="E-Mail"
            icon={FiMail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            icon={FiLock}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" text="Cadastrar" onClick={handleSignIn} />
        </form>

        <Return>
          <Link to="/login">
            <span>Realizar login</span>
          </Link>
        </Return>
      </FormSide>

      <ImageBackground />
    </Container>
  )
}
