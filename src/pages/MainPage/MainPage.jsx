import { Link } from 'react-router-dom';
import * as S from './MainPage.styled.jsx';
import { Container } from '@mui/material';

const MainPage = () => {
  return (
    <>
      <S.Section>
        <Container>
          <S.SectionTitleHero>GooseTrack</S.SectionTitleHero>
          <Link to="/register">Sign up</Link>
          <Link to="/login">Log in</Link>
        </Container>
      </S.Section>
      <section>
        <h2>1.</h2>
        <h3>Calendar</h3>
        <h3>View</h3>
        <p>
          GooseTrack's Calendar view provides a comprehensive overview of your
          schedule, displaying all your tasks, events, and appointments in a
          visually appealing and intuitive layout.
        </p>
      </section>
      <section className="sidebar">
        <h2>2.</h2>
        <h3>Sidebar</h3>
        <p>
          GooseTrack offers easy access to your account settings, calendar, and
          filters. The "My Account" section allows you to manage your profile
          information and preferences, while the calendar provides a quick and
          convenient way to view your upcoming events and tasks.
        </p>
      </section>
      <section className="allIn">
        <h2>3.</h2>
        <h3>All In</h3>
        <h3>One</h3>
        <p>
          GooseTrack is an all-in-one productivity tool that helps you stay on
          top of your tasks, events, and deadlines. Say goodbye to scattered
          to-do lists and hello to streamlined productivity with GooseTrack.
        </p>
      </section>
      <section className="reviews"></section>
    </>
  );
};

export default MainPage;
