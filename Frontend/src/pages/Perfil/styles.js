import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "content";
  grid-template-rows: 14.4rem auto;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 0.8rem;

  padding: 6.4rem 0 6.4rem 14.4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.PINK};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Avatar = styled.div`
  position: relative;
  margin: -10rem;

  > img {
    height: 18.6rem;
    width: 18.6rem;
    border-radius: 50%;
    object-fit: contain;
  }

  > div {
    display: grid;
    place-content: center;

    position: absolute;
    width: 4.8rem;
    height: 4.8rem;
    bottom: 0.8rem;
    right: 1.4rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }
`

export const Form = styled.form`
  width: 34rem;

  margin-top: 18rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 0.8rem;

  > div:nth-child(3) {
    margin-top: 0.8rem;
  }

  > button {
    margin-top: 1.6rem;
  }
`
