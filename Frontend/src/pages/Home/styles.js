import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  padding-bottom: 5.8rem;
`
export const NewMovie = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  padding: 5.8rem 12.4rem;

  > button {
    max-width: 20.8rem;
  }
`

export const MovieCards = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 2.4rem;

  padding: 0 12.4rem;

  padding: 0 12.4rem;
  max-height: 60vh;
  overflow-y: auto;
`
