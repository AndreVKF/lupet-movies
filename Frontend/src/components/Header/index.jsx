import { Link } from "react-router-dom"

import { Container, Profile } from "./styles"

export const Header = () => {
  return (
    <Container>
      <span>LupetMovies</span>

      <input type="text" placeholder="Pesquisar pelo título" />

      <Profile>
        <div>
          <strong>Lupet Bolota</strong>
          <span>sair</span>
        </div>
        <Link to="/perfil">
          <img src="https://github.com/AndreVKF.png" alt="Imagem do Usuário" />
        </Link>
      </Profile>
    </Container>
  )
}
