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
          tags.map((tag) => {
            return <Tag name={tag.name} key={tag.id} />
          })}
      </MovieTags>
    </Container>
  )
}
