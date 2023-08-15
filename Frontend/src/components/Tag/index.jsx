import { Container } from "./styles"

export const Tag = ({ name, ...rest }) => {
  return (
    <Container {...rest}>
      <p>{name}</p>
    </Container>
  )
}
