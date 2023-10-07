import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './TaskForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { createTask, updateTask } from 'redux/tasks/operations';
import CircularProgress from '@mui/material/CircularProgress';
import { selectIsLoadingTask } from 'redux/selectors';
import { useParams } from 'react-router-dom';

const timeRegexp = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

const validationSchema = yup.object({
  title: yup.string().trim().max(250).required(),
  priority: yup.string().oneOf(['low', 'medium', 'high']),
  start: yup.string().matches(timeRegexp, 'hh:mm').required(),
  end: yup.string().matches(timeRegexp, 'hh:mm').required(),
});

const defaultValues = {
  title: '',
  priority: 'low',
  start: '',
  end: '',
};

const priorities = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
];

export const TaskForm = ({ task = null, onCloseTaskModal, status = null }) => {
  const isCreate = !task;
  const defaultTaskValues = task
    ? {
        title: task.title,
        priority: task.priority,
        start: task.start,
        end: task.end,
      }
    : defaultValues;
  const date = useParams().day;

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultTaskValues,
    resolver: yupResolver(validationSchema),
  });

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingTask);

  const onSubmit = data => {
    if (isCreate) {
      dispatch(createTask({ ...data, date, status }));
    } else {
      dispatch(updateTask({ id: task._id, data }));
    }
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      {isLoading && (
        <CircularProgress
          size={20}
          style={{ position: 'absolute', top: 14, left: 14 }}
        />
      )}

      <S.CloseButton onClick={onCloseTaskModal}>
        <S.CloseIcon />
      </S.CloseButton>

      <S.Label>
        <S.LabelText>Title</S.LabelText>

        <S.Input placeholder="Enter text" {...register('title')} />

        {errors?.title && <S.ErrorText>{errors.title?.message}</S.ErrorText>}
      </S.Label>

      <S.InputContainer>
        <label style={{ position: 'relative' }}>
          <S.LabelText>Start</S.LabelText>

          <S.Input placeholder="9:00" {...register('start')} />

          {errors?.start && <S.ErrorText>{errors.start?.message}</S.ErrorText>}
        </label>

        <label style={{ position: 'relative' }}>
          <S.LabelText>End</S.LabelText>

          <S.Input placeholder="14:00" {...register('end')} />

          {errors?.end && <S.ErrorText>{errors.end?.message}</S.ErrorText>}
        </label>
      </S.InputContainer>

      <S.RadioBtnContainer>
        {priorities.map(({ label, value }) => (
          <S.RadioBtnLabel
            key={value}
            $priority={value}
            $selected={value === watch('priority')}
          >
            <S.RadioBtn type="radio" {...register('priority')} value={value} />
            <S.IndicatorBorder className="active">
              <S.Indicator $priority={value} />
            </S.IndicatorBorder>
            <S.RadioBtnLabelText>{label}</S.RadioBtnLabelText>
          </S.RadioBtnLabel>
        ))}
      </S.RadioBtnContainer>

      <S.ButtonContainer>
        <S.SubmitButton type="submit">
          {isCreate ? (
            <>
              <S.AddIcon />
              Add
            </>
          ) : (
            <>
              <S.EditIcon />
              Edit
            </>
          )}
        </S.SubmitButton>
        <S.CancelButton onClick={onCloseTaskModal} type="button">
          Cancel
        </S.CancelButton>
      </S.ButtonContainer>
    </S.Form>
  );
};
