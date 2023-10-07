import * as S from './AddTaskBtn.styled';

export const AddTaskBtn = ({ onOpenTaskModal }) => {
  //  const onOpenTaskModal = () => {
  //    setIsOpened(!isOpened);
  //  };
  return (
    <S.Button type="button" onClick={onOpenTaskModal}>
      <S.Icon />
      Add task
    </S.Button>
  );
};
