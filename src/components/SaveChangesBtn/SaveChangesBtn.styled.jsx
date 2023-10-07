import styled from '@emotion/styled';

export const SaveBtn = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border: none;
  color: ${({ theme }) => theme.white};
  display: grid;
  grid-row: 5;
  justify-self: center;
  align-items: center;
  padding: 14px 50px;
  margin: 0 auto;
  isolation: isolate;
  min-width: 195px;
  background-color: ${({ disabled, theme }) => {
    return disabled ? `${theme.disabled}` : `${theme.accentPrimary}`;
  }};

  border-radius: 16px;
  grid-column-start: 1;
  grid-column-end: 3;
  cursor: ${({ disabled }) => {
    return disabled ? 'not-allowed' : 'pointer';
  }};

  transition: box-shadow linear 350ms;

  :hover,
  :focus {
    background-color: ${({ disabled, theme }) => {
      return disabled ? `${theme.disabled}` : `${theme.accentPrimaryHover}`;
    }};
  }

  @media screen and (min-width: 767px) {
    min-width: 262px;
    padding: 15px 84px;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;
