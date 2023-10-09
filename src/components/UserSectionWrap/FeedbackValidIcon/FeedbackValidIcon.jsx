import {
  InvalidInputIcon,
  ValidInputIcon,
  ValidationIcon,
} from './FeedbackValidIcon.styled';

export const FeedbackValidIcon = ({ errors }) => {
  return (
    <>
      <ValidationIcon>
        {errors ? <InvalidInputIcon /> : <ValidInputIcon />}
      </ValidationIcon>
    </>
  );
};
