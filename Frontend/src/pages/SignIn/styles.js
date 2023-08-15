import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-areas: "form image";
  grid-template-columns: max-content 1fr;

  width: 100%;
  height: 100vh;
`

export const FormSide = styled.div`
  grid-area: form;

  display: flex;
  flex-direction: column;
  align-items: start;

  min-width: 34rem;
  padding: 0 13.6rem 24rem;

  > form {
    width: 34rem;
    margin-top: 4.8rem;

    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    > button {
      margin-top: 0.6rem;
    }
  }
`
export const Return = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 4.2rem;
  cursor: pointer;

  > a {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
