import styled from '@emotion/styled';

const Container = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.bgMain};

  & main {
    background-color: ${props => props.theme.bgMain};
  }
`;

export default Container;
