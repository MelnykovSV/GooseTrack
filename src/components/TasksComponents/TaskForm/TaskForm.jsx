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

      <S.RadioBtnContainer>
        <S.RadioBtnLabel $priority="low">
          <S.IndicatorBorder className="active">
            <S.Indicator $priority="low" />
          </S.IndicatorBorder>
          <S.RadioBtnLabelText>Low</S.RadioBtnLabelText>
        </S.RadioBtnLabel>

        <S.RadioBtnLabel $priority="medium">
          <S.IndicatorBorder className="active">
            <S.Indicator $priority="medium" />
          </S.IndicatorBorder>
          <S.RadioBtnLabelText>Medium</S.RadioBtnLabelText>
        </S.RadioBtnLabel>

        <S.RadioBtnLabel $priority="high">
          <S.IndicatorBorder className="active">
            <S.Indicator $priority="high" />
          </S.IndicatorBorder>
          <S.RadioBtnLabelText>High</S.RadioBtnLabelText>
        </S.RadioBtnLabel>
      </S.RadioBtnContainer>

      <S.ButtonContainer>
        <S.SubmitButton type="submit">
          <S.EditIcon />
          Edit
        </S.SubmitButton>
        <S.CancelButton type="button">Cancel</S.CancelButton>
      </S.ButtonContainer>
    </S.Form>
  );
};
