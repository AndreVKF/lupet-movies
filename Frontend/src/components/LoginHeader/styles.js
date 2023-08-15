import styled from "styled-components"

export const Container = styled.div`
  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 4.8rem;
    font-weight: bold;
    margin-top: 22rem;
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > h2 {
    margin-top: 4.8rem;
    font-size: 2.4rem;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
