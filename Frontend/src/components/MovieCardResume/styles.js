import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;

  padding: 3.2rem;
  border-radius: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  h2 {
    font-weight: bold;
    font-size: 2.4rem;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  p {
    max-height: 5.2rem;
    text-align: justify;
    overflow: hidden;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }
`

export const MovieHeader = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.8rem;
`

export const MovieTags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;

  gap: 0.8rem;
  margin-top: 2.4rem;
`
