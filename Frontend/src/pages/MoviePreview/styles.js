import styled from "styled-components"

export const Container = styled.div`
  position: absolute;
  width: 100%;
`

export const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 2.4rem;

  padding: 4rem 24rem 15.6rem;
  margin-top: 10rem;

  @media only screen and (max-width: 1400px) {
    padding: 4rem 12.4rem 15.6rem;
  }

  > div {
    display: flex;
    align-items: center;

    gap: 1.6rem;
  }
`
