import { BsStarFill, BsStar } from "react-icons/bs"

import { Container } from "./styles"

export const Stars = ({ filled, size = 12 }) => {
  const createStarsArrays = (filled = 0) => {
    let starsArray = []

    for (let i = 0; i < 5; i++) {
      starsArray.push(
        filled > 0 ? (
          <BsStarFill size={size} key={i} />
        ) : (
          <BsStar size={size} key={i} />
        )
      )

      filled--
    }

    return starsArray
  }

  const starsArray = createStarsArrays(filled)

  return <Container>{starsArray}</Container>
}
