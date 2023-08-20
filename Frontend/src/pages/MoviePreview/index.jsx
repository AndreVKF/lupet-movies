import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

import { Container, Main } from "./styles"

import { Header } from "../../components/Header"
import { GoBack } from "../../components/GoBack"
import { MovieCard } from "../../components/MovieCard"
import { Button } from "../../components/Button"

import { ROUTES } from "../../utils/constants"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"

export const MoviePreview = () => {
  const { userData } = useAuth()
  const navigate = useNavigate()

  const [movie, setMovie] = useState(null)
  const [isUserMovie, setIsUserMovie] = useState(false)
  const { movie_note_id } = useParams()

  const handleUpdateMovieNote = (e) => {
    e.preventDefault()

    navigate(`/update/${movie.movie_note_id}`)
  }

  const handleDeleteMovieNote = (e) => {
    e.preventDefault()

    const confirmDelete = confirm(
      `Tem certeza que deseja deletar o filme: ${movie.movie_title}`
    )

    if (confirmDelete) {
      api
        .delete(ROUTES.MOVIE_NOTES, { data: { id: movie.movie_note_id } })
        .then(() => {
          alert("Movie note deletado com sucesso!!")
          navigate("/")
        })
        .catch((err) => {
          if (err.response) {
            alert(err.response.data.message)
          } else {
            alert("Não foi possível deletar movie note!!")
          }
        })
    }
  }

  useEffect(() => {
    api
      .get(`${ROUTES.MOVIE_NOTES_INFO}/${movie_note_id}`)
      .then((res) => {
        setMovie(res.data)
        setIsUserMovie(res.data.user_id === userData.id ? true : false)
      })
      .catch((err) => {
        if (err.response) {
          alert(err.response.data.message)
        } else {
          alert("Não foi possível carregar dados do filme!!")
        }
      })
  }, [movie_note_id, userData])

  return (
    <Container>
      <Header searchMovie={false} />

      <Main>
        <GoBack />
        {movie && <MovieCard movie={movie} />}

        {isUserMovie && (
          <div>
            <Button text={"Atualizar"} onClick={handleUpdateMovieNote} />
            <Button
              text={"Excluir"}
              dark="true"
              onClick={handleDeleteMovieNote}
            />
          </div>
        )}
      </Main>
    </Container>
  )
}
