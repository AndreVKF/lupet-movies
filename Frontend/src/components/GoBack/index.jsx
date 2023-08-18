import { Link, useNavigate } from "react-router-dom"

import { FiArrowLeft } from "react-icons/fi"

import { Container } from "./styles"

export const GoBack = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <Container onClick={handleGoBack}>
      <FiArrowLeft />
      <span>Voltar</span>
    </Container>
  )
}
