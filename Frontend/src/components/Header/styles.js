import styled from "styled-components"

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 11.6rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 6.4rem;

  padding: 4.2rem 12.4rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};

  > span {
    font-weight: bold;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    cursor: pointer;
  }

  > input {
    flex: 1;
    max-width: 63rem;
    height: 5.6rem;

    padding: 1.9rem 2.4rem;
    border-radius: 1rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_700};
      font-size: 1.4rem;
    }
  }
`
export const Profile = styled.div`
  display: flex;
  text-align: right;

  gap: 0.9rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: right;

    > strong,
    > span {
      font-weight: bold;
      font-size: 1.4rem;
    }

    > strong {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    > span {
      color: ${({ theme }) => theme.COLORS.GRAY_700};
      cursor: pointer;
    }
  }

  img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    cursor: pointer;
  }
`
