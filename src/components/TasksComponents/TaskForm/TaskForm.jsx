import * as S from './TaskForm.styled';

export const TaskForm = ({ task = null, onCloseTaskModal }) => {
  return (
    <S.Form>
      <S.CloseButton onClick={onCloseTaskModal}>
        <S.CloseIcon />
      </S.CloseButton>

      <S.Label>
        <S.LabelText>Title</S.LabelText>

        <S.Input placeholder="Enter text" />
      </S.Label>

      <S.InputContainer>
        <label>
          <S.LabelText>Start</S.LabelText>

          <S.Input placeholder="9:00" />
        </label>

        <label>
          <S.LabelText>End</S.LabelText>

          <S.Input placeholder="14:00" />
        </label>
      </S.InputContainer>
    </S.Form>
  );
};
