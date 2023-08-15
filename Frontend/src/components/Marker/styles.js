import styled from "styled-components"

export const Container = styled.div`
  height: 5.6rem;
  padding: 1.6rem;
  display: inline-block;
`

export const MarkerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.6rem;

  height: 5.6rem;
  padding: 1.6rem;
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const NewMarker = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.6rem;

  height: 5.6rem;
  padding: 1.6rem;
  border-radius: 1rem;

  background-color: transparent;
  border: 1px dashed ${({ theme }) => theme.COLORS.GRAY_700};

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
