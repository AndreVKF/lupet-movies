import { BsClock } from "react-icons/bs"

import { Container, MovieHeader, PublisherInfo, MovieTags } from "./styles"

import { Stars } from "../../components/Stars"
import { Tag } from "../../components/Tag"

export const MovieCard = ({ movie }) => {
  return (
    <Container>
      <MovieHeader>
        <h1>{movie.title}</h1>
        <Stars filled={movie.stars} size={16} />
      </MovieHeader>

      <PublisherInfo>
        <img
          src="https://github.com/AndreVKF.png"
          alt="Foto do usuário que publicou a descrição do filme"
        />
        <span>Por {movie.user}</span>
        <BsClock size={14} />
        <span>{movie.publishDate}</span>
      </PublisherInfo>

      <MovieTags>
        {movie.tags &&
          movie.tags.map((tag) => {
            return <Tag key={tag.id} name={tag.name} />
          })}
      </MovieTags>

      <p>{movie.description}</p>
    </Container>
  )
}
