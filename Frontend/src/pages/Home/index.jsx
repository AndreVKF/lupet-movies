import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { Container, NewMovie, MovieCards } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { MovieCardResume } from "../../components/MovieCardResume"

import { api } from "../../services/api"
import { ROUTES } from "../../utils/constants"
import { adjustTagsForMovieInfo } from "../../utils/functions"

export const Home = () => {
  const [movieList, setMovieList] = useState([])
  const [searchTitle, setSearchTitle] = useState("")

  useEffect(() => {
    api
      .get(ROUTES.MOVIE_NOTES_INFO_USER)
      .then((res) => {
        const movieNotes = res.data.map((movieNote) =>
          adjustTagsForMovieInfo(movieNote)
        )

        setMovieList(movieNotes)
      })
      .catch((err) => {
        console.log(err)
        if (err.response) {
          alert(err.response.data.message)
        } else {
          alert("Não foi possível atualizar lista de filmes!!")
        }
      })
  }, [])

  return (
    <Container>
      <Header />

      <NewMovie>
        <h1>Lista de filmes</h1>
        <Link to="/create">
          <Button text={"+ Adicionar Filme"} />
        </Link>
      </NewMovie>

      <MovieCards>
        {movieList &&
          movieList.map((movieCard) => {
            return (
              <Link
                key={movieCard.movie_note_id}
                to={`/preview/${movieCard.movie_note_id}`}
              >
                <MovieCardResume
                  title={movieCard.movie_title}
                  stars={movieCard.rating}
                  description={movieCard.movie_description}
                  tags={movieCard.tags}
                />
              </Link>
            )
          })}
      </MovieCards>
    </Container>
  )
}
