import { Container } from "./styles"

// eslint-disable-next-line react/prop-types
export const Input = ({ icon: Icon, ...rest }) => {
  return (
    <Container>
      {Icon && <Icon size={22} />}

      <input {...rest} />
    </Container>
  )
}
