import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  padding-bottom: 5.8rem;
  position: absolute;
`
export const NewMovie = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  padding: 5.8rem 24rem;
  margin-top: 10rem;

  @media only screen and (max-width: 1400px) {
    padding: 5.8rem 12.4rem;
  }

  > button {
    max-width: 20.8rem;
  }
`

export const MovieCards = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 2.4rem;

  padding: 0 24rem;

  @media only screen and (max-width: 1400px) {
    padding: 0rem 12.4rem;
  }

  overflow-y: auto;
`
