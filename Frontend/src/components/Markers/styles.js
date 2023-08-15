import styled from "styled-components"

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  width: 100%;
  height: 8.8rem;

  border-radius: 0.8rem;
`

export const MarkersContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.4rem;

  padding: 1.6rem;
  flex-wrap: wrap;
`
