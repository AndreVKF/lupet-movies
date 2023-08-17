import { Stars } from "../Stars"
import { Tag } from "../Tag"

import { Container, MovieHeader, MovieTags } from "./styles"

export const MovieCardResume = ({ title, stars, description, tags }) => {
  return (
    <Container>
      <MovieHeader>
        <h2>{title}</h2>

        <Stars filled={stars} />
      </MovieHeader>

      <p>{description}</p>

      <MovieTags>
        {tags &&
          tags.map((tag, idx) => {
            return <Tag name={tag} key={idx} />
          })}
      </MovieTags>
    </Container>
  )
}
