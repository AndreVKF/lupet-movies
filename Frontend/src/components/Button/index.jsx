import { Container } from "./styles"

export const Button = ({ text, loading = false, dark = "", ...rest }) => {
  return (
    <Container dark={dark} {...rest}>
      {loading ? "..." : text}
    </Container>
  )
}
