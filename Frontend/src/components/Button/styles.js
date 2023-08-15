import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;

  padding: 1.6rem 3.2rem;

  background-color: ${({ theme, dark }) =>
    dark ? theme.COLORS.BACKGROUND_800 : theme.COLORS.PINK};
  color: ${({ theme, dark }) =>
    dark ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_900};

  border-radius: 0.8rem;
  border: none;

  font-size: 1.6rem;

  &:disabled {
    opacity: 0.5;
  }
`
