import { Link, useParams } from "react-router-dom"

import { Container, Main } from "./styles"

import { Header } from "../../components/Header"
import { GoBack } from "../../components/GoBack"
import { MovieCard } from "../../components/MovieCard"

import { MOVIE_CARDS } from "../../utils/data"

export const MoviePreview = () => {
  let { id } = useParams()
  const movie = MOVIE_CARDS[id]

  return (
    <Container>
      <Header />

      <Main>
        <Link to="/">
          <GoBack />
        </Link>
        <MovieCard movie={movie} />
      </Main>
    </Container>
  )
}
