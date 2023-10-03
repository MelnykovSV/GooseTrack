import * as S from './AddTaskBtn.styled';

export const AddTaskBtn = ({ onOpenTaskModal }) => {
  return (
    <S.Button type="button" onClick={onOpenTaskModal}>
      <S.Icon />
      Add task
    </S.Button>
  );
};
