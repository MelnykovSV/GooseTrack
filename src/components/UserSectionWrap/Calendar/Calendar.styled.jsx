import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';

export const InputCalendar = styled(DatePicker)`
  box-sizing: border-box;
  width: 100%;
  height: 42px;
  margin: 0px;
  padding: 14px 18px 14px 18px;
  border: ${({ status, theme }) => {
    switch (status) {
      case 'error':
        return `1px solid ${theme.error}`;
      case 'valid':
        return `1px solid ${theme.success}`;
      default:
        return `1px solid ${theme.borderUserTextarea}`;
    }
  }};
  border-radius: 8px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  background-color: ${({ theme }) => theme.bgUserform};
  color: ${({ theme }) => theme.textPrimary};

  :hover {
    border: 1px solid ${({ theme }) => theme.borderHover};
  }
`;
