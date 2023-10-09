import { Feedback, InvalidFeedback, ValidFeedback } from "./FeedbackMessage.styled";

export const FeedbackMessage = ({getFieldState, errors}) => {
    return (
      <Feedback>
        {getFieldState.isDirty && !errors ? (
          <ValidFeedback>Value is correct</ValidFeedback>
        ) : (
          <InvalidFeedback>{errors?.message}</InvalidFeedback>
        )}
      </Feedback>
    );
}