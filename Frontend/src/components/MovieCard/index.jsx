import { useAuth } from "../../hooks/auth"
import { BsClock } from "react-icons/bs"

import { Container, MovieHeader, PublisherInfo, MovieTags } from "./styles"

import { Stars } from "../../components/Stars"
import { Tag } from "../../components/Tag"

import { adjustTagsForMovieInfo, titleString } from "../../utils/functions"

export const MovieCard = ({ movie }) => {
  const { userData } = useAuth()
  const { tags } = adjustTagsForMovieInfo(movie)

  return (
    <Container>
      <MovieHeader>
        <h1>{movie.movie_title}</h1>
        <Stars filled={movie.rating} size={16} />
      </MovieHeader>

      <PublisherInfo>
        <img
          src={userData.avatar}
          alt="Foto do usuário que publicou a descrição do filme"
        />
        <span>Por {titleString(movie.user_name)}</span>
        <BsClock size={14} />
        <span>{movie.updated_at}</span>
      </PublisherInfo>

      <MovieTags>
        {tags &&
          tags.map((tag, idx) => {
            return <Tag key={idx} name={tag} />
          })}
      </MovieTags>

      <p>{movie.movie_description}</p>
    </Container>
  )
}
