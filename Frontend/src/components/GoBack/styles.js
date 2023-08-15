import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 0.1rem;

  color: ${({ theme }) => theme.COLORS.PINK};

  cursor: pointer;
`
