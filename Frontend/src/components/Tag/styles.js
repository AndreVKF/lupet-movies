import styled from "styled-components"

export const Container = styled.div`
  padding: 0.5rem 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border-radius: 0.8rem;

  > p {
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`
