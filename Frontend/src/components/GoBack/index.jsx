import { Link } from "react-router-dom"

import { FiArrowLeft } from "react-icons/fi"

import { Container } from "./styles"

export const GoBack = () => {
  return (
    <Container>
      <FiArrowLeft />
      <span>Voltar</span>
    </Container>
  )
}
