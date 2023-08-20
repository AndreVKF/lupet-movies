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
  const [filteredMovieList, setFilteredMovieList] = useState([])
  const [searchTitle, setSearchTitle] = useState("")
  const [displayAllMovies, setDisplayAllMovies] = useState(true)

  useEffect(() => {
    const endpoint = displayAllMovies
      ? ROUTES.MOVIE_NOTES_INFO_ALL
      : ROUTES.MOVIE_NOTES_INFO_USER

    api
      .get(endpoint)
      .then((res) => {
        console.log(res)
        const movieNotes = res.data.map((movieNote) =>
          adjustTagsForMovieInfo(movieNote)
        )

        const orderedMovieNotes = movieNotes.sort((f, s) => {
          if (f.movie_title.toLowerCase() < s.movie_title.toLowerCase()) {
            return -1
          } else if (
            f.movie_title.toLowerCase() > s.movie_title.toLowerCase()
          ) {
            return 1
          }
          return 0
        })

        setMovieList(orderedMovieNotes)
        setFilteredMovieList(orderedMovieNotes)
      })
      .catch((err) => {
        if (err.response) {
          alert(err.response.data.message)
        } else {
          alert("Não foi possível atualizar lista de filmes!!")
        }
      })
  }, [displayAllMovies])

  useEffect(() => {
    if (!searchTitle || searchTitle === "") {
      setFilteredMovieList(movieList)
      return
    }

    const searchMatchMovieList = movieList.filter((movie) => {
      const title = movie.movie_title.toLowerCase()

      return title.includes(searchTitle.toLowerCase())
    })

    setFilteredMovieList(searchMatchMovieList)
  }, [searchTitle, movieList])

  return (
    <Container>
      <Header
        searchMovie={true}
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
      />

      <NewMovie>
        <div>
          <h1>Lista de filmes</h1>
          <div className="list-options">
            <span
              className={displayAllMovies ? "display-selected" : null}
              onClick={() => setDisplayAllMovies(true)}
            >
              Todos os filmes
            </span>
            <span
              className={displayAllMovies ? null : "display-selected"}
              onClick={() => setDisplayAllMovies(false)}
            >
              Meus filmes
            </span>
          </div>
        </div>
        <Link to="/create">
          <Button text={"+ Adicionar Filme"} />
        </Link>
      </NewMovie>

      <MovieCards>
        {filteredMovieList &&
          filteredMovieList.map((movieCard) => {
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
