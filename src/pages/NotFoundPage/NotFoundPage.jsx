import React from 'react';

import {
  Description,
  Image,
  StyledBtn,
  Container,
  Content,
  StyledLink,
} from './NotFoundPage.styled';

import GooseRocket from '../../assets/images/not-found.png';

export default function NotFoundPage() {
  return (
    <Container>
      <Content>
        <Image src={GooseRocket} alt="Not found" />
        <Description>
          We’re sorry, the page you requested could not be found. Please go back
          to the homepage.
        </Description>
        <StyledBtn>
          <StyledLink to="/account">Back to home</StyledLink>
        </StyledBtn>
      </Content>
    </Container>
  );
}
