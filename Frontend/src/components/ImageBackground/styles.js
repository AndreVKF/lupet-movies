import styled from "styled-components"

import backgroundImg from "../../assets/images/background.png"

export const Container = styled.div`
  grid-area: image;

  background: url(${backgroundImg}) no-repeat center center;
  background-repeat: cover;
  background-size: cover;
`
