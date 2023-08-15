import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  gap: 0.6rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
