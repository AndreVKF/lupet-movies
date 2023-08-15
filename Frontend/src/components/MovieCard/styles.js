import styled from "styled-components"

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4rem;

  > p {
    text-align: justify;
    font-size: 1.6rem;
    line-height: 2.2rem;
    white-space: pre-line;
  }
`

export const MovieHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  > h1 {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 3.6rem;
    font-weight: bold;
  }
`

export const PublisherInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;

  > img {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const MovieTags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`
