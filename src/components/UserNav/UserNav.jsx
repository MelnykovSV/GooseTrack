import { NavLink } from './UserNav.styled';
import { Container, Navigation } from './UserNav.styled';

export const UserNav = () => {
  return (
    <Container>
      <Navigation>
        <NavLink to="/account">My account</NavLink>
        <NavLink to="/calendar">Calendar</NavLink>
        <NavLink to="/statistics">Statistics</NavLink>
      </Navigation>
    </Container>
  );
};
