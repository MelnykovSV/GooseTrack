import styled from '@emotion/styled';
import { ReactComponent as ErrorIcon } from '../../../icons/error.svg';
import { ReactComponent as ValidIcon } from '../../../icons/valid.svg';

export const ValidationIcon = styled.span`
  border: none;
  position: absolute;
  right: 10px;
  top: 34px;
  font-size: x-large;

  @media screen and (min-width: 1200px) {
    right: 10px;
  }
`;

export const InvalidInputIcon = styled(ErrorIcon)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.error};
`;

export const ValidInputIcon = styled(ValidIcon)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.success};
`;
