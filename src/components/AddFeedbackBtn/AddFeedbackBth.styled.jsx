import styled from '@emotion/styled';
import Button from 'components/Button/Button';

export const FeedbackBtn = styled(Button)`
  padding: 8px 20px;

  font-size: 12px;
  line-height: 1.33;

  border-radius: 10px;

  @media screen and (min-width: 768px) {
    padding: 12px 32px;

    font-size: 14px;
    line-height: 1.28;

    border-radius: 14px;
  }
`;
