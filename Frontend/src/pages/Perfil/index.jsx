import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { FiCamera, FiUser, FiMail } from "react-icons/fi"

import { Container, Header, Content, Avatar, Form } from "./styles"

import { Input } from "../../components/Input"
import { InputPassword } from "../../components/InputPassword"
import { Button } from "../../components/Button"
import { GoBack } from "../../components/GoBack"

import { useAuth } from "../../hooks/auth"

import { ROUTES } from "../../utils/constants"
import { titleString } from "../../utils/functions"
import { api } from "../../services/api"

export const Perfil = () => {
  const { userData, setUserData } = useAuth()
  const navigate = useNavigate()

  const [name, setName] = useState(titleString(userData.name))
  const [email, setEmail] = useState(userData.email)
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")

  const [allowUpdate, setAllowUpdate] = useState(false)

  const handleUpdate = (e) => {
    e.preventDefault()

    api
      .put(ROUTES.USERS, {
        name,
        email,
        password: newPassword,
        old_password: oldPassword,
      })
      .then((data) => {
        setUserData(data.data)
        setOldPassword("")
        setNewPassword("")
        alert("Dados do usuário atualizados com sucesso!!")
        navigate("/")
      })
      .catch((err) => {
        if (err.response) {
          alert(err.response.data.message)
        } else {
          alert("Não foi possível atualizar dados do usuário!!")
        }
      })
  }

  useEffect(() => {
    if (oldPassword !== "" && newPassword !== "") {
      setAllowUpdate(true)
    } else {
      setAllowUpdate(false)
    }
  }, [oldPassword, newPassword])

  return (
    <Container>
      <Header>
        <Link to="/">
          <GoBack />
        </Link>
      </Header>

      <Content>
        <Avatar>
          <img src="https://github.com/AndreVKF.png" alt="Foto do usuário" />
          <div>
            <FiCamera size={18} />
          </div>
        </Avatar>

        <Form>
          <Input
            icon={FiUser}
            placeholder={titleString(userData.name)}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={FiMail}
            placeholder={userData.email}
            value={email}
            onChange={(e) => setEmail(e.target.email)}
          />
          <InputPassword
            placeholder="Senha atual"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <InputPassword
            placeholder="Nova senha"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <Button
            text={"Update"}
            disabled={!allowUpdate}
            onClick={handleUpdate}
          />
        </Form>
      </Content>
    </Container>
  )
}
