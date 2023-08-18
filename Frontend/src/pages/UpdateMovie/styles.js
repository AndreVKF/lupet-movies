import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  position: absolute;
`

export const MainContent = styled.div`
  padding: 4rem 24rem 8.5rem;
  margin-top: 10rem;

  @media only screen and (max-width: 1400px) {
    padding: 4rem 12.4rem 8.5rem;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 2.41rem;
`

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 4rem;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4rem;
  }

  > textarea {
    margin-top: 4rem;
    height: 27.4rem;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 1.6rem;

    border: none;
    border-radius: 1rem;
    resize: none;

    padding-top: 1.9rem;
    padding-left: 1.6rem;

    &:placeholder {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.GRAY_700};
    }
  }
`

export const MarkerContent = styled.div`
  margin-top: 4rem;

  > p {
    font-size: 2rem;
    text-align: start;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    margin-bottom: 2.4rem;
  }
`

export const ButtonContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 4rem;

  > button {
    max-width: 32rem;
  }
`
