import * as S from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ title, onOpenTaskModal }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Button onClick={onOpenTaskModal} />
    </S.Container>
  );
};
