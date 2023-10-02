import * as S from './TaskForm.styled';

export const TaskForm = ({ task = null, onCloseTaskModal }) => {
  return (
    <S.Form>
      <S.CloseButton onClick={onCloseTaskModal}>
        <S.CloseIcon />
      </S.CloseButton>

      <S.Label>
        <S.LabelText>Title</S.LabelText>

        <S.Input />
      </S.Label>

      <S.InputContainer>
        <label>
          <S.LabelText>Start</S.LabelText>

          <S.Input />
        </label>

        <label>
          <S.LabelText>End</S.LabelText>

          <S.Input />
        </label>
      </S.InputContainer>
    </S.Form>
  );
};
