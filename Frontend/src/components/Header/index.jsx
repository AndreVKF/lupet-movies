import { Link, useNavigate } from "react-router-dom"

import { Container, Profile } from "./styles"

import { useAuth } from "../../hooks/auth"
import { titleString } from "../../utils/functions"

export const Header = ({ searchMovie = true, searchTitle, setSearchTitle }) => {
  const { userData, signOut } = useAuth()
  const navigate = useNavigate()

  const handleLeavePage = (e) => {
    e.preventDefault()

    signOut()
    navigate("/")
  }

  return (
    <Container>
      <Link to="/">
        <span>LupetMovies</span>
      </Link>

      {searchMovie && (
        <input
          type="text"
          placeholder="Pesquisar pelo título"
          onChange={(e) => setSearchTitle(e.target.value)}
          value={searchTitle}
        />
      )}

      <Profile>
        <div>
          <Link to="/perfil">
            <strong>{titleString(userData.name)}</strong>
          </Link>
          <span onClick={handleLeavePage}>sair</span>
        </div>
        <Link to="/perfil">
          <img src={userData.avatar} alt="Imagem do Usuário" />
        </Link>
      </Profile>
    </Container>
  )
}
