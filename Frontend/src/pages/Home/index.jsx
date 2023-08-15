import { Link } from "react-router-dom"

import { Container, NewMovie, MovieCards } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { MovieCardResume } from "../../components/MovieCardResume"

import { MOVIE_CARDS } from "../../utils/data"

export const Home = () => {
  return (
    <Container>
      <Header />

      <NewMovie>
        <h1>Meus filmes</h1>
        <Link to="/create">
          <Button text={"+ Adicionar Filme"} />
        </Link>
      </NewMovie>

      <MovieCards>
        {MOVIE_CARDS &&
          MOVIE_CARDS.map((movieCard) => {
            return (
              <Link key={movieCard.id} to={`/preview/${movieCard.id}`}>
                <MovieCardResume
                  title={movieCard.title}
                  stars={movieCard.stars}
                  description={movieCard.description}
                  tags={movieCard.tags}
                />
              </Link>
            )
          })}
      </MovieCards>
    </Container>
  )
}
