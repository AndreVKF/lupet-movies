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

  min-width: 38rem;
  padding: 0 13.6rem 8rem;

  > form {
    width: 38rem;
    margin-top: 4.8rem;

    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    > button {
      margin-top: 0.6rem;
    }
  }

  a {
    align-self: center;
    margin-top: 4.2rem;

    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    cursor: pointer;
  }
`
