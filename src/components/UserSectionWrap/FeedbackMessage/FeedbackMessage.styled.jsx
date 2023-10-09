import styled from "@emotion/styled";

export const Feedback = styled.div`
  height: 25px;
  margin-top: 8px;
  margin-left: 10px;
`;

export const ValidFeedback = styled.div`
  color: ${({ theme }) => theme.success};
  font-size: 12px;
`;

export const InvalidFeedback = styled.div`
  color: ${({ theme }) => theme.error};
  font-size: 12px;
`;
