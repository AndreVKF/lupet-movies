import { Container } from "./styles"

export const LoginHeader = ({ text }) => {
  return (
    <Container>
      <h1>LupetMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir.</p>

      <h2>{text}</h2>
    </Container>
  )
}
