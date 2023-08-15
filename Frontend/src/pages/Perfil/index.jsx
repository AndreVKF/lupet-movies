import { Link } from "react-router-dom"

import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi"

import { Container, Header, Content, Avatar, Form } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { GoBack } from "../../components/GoBack"

export const Perfil = () => {
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
          <Input icon={FiUser} placeholder="Lupet Bolota" />
          <Input icon={FiMail} placeholder="lupet@gmail.com" />
          <Input icon={FiLock} placeholder="Senha atual" />
          <Input icon={FiLock} placeholder="Nova senha" />

          <Button text={"Salvar"} />
        </Form>
      </Content>
    </Container>
  )
}
