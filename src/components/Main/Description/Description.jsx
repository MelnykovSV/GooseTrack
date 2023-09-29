import * as S from './Description.styled';

const DescriptionSection = () => {
  return (
    <S.DescriptionContainer>
      <S.Number>1.</S.Number>
      <S.Title>Calendar</S.Title>
      <S.TitleSecondary>view</S.TitleSecondary>
      <S.Description>
        GooseTrack's Calendar view provides a comprehensive overview of your
        schedule, displaying all your tasks, events, and appointments in a
        visually appealing and intuitive layout.
      </S.Description>
    </S.DescriptionContainer>
  );
};

export default DescriptionSection;
