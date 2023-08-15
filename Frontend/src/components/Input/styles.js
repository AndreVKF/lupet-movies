import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 0.8rem;

  > input {
    height: 5.6rem;
    width: 100%;

    padding: 1.9rem 1.2rem;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
    background: transparent;
    border: none;
    font-size: 1.6rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_700};
      font-size: 1.6rem;
    }
  }

  > svg {
    margin-left: 1.6rem;
  }
`
