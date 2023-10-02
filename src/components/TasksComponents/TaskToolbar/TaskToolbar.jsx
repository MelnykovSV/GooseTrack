// import Icons from 'images/sprite.svg';
import * as S from //   BtnArrow, // {
//   BtnStyled,
//   ChouseCat,
//   InputStyled,
//   LabelStyled,
//   ToolBarItem,
//   Wraper,
// }
'./TaskToolbar.styled';
import { TaskModal } from '..';

import { deleteTask, fetchDayTasks, patchTask } from 'redux/tasks/operations';
import { useDispatch, useSelector } from 'react-redux';
// import { selectTasks } from 'redux/tasks/selectors';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
// import Cookies from 'js-cookie';

export const TaskToolBar = ({ id, addCategory }) => {
  const dispatch = useDispatch();
  // const tasks = useSelector(selectTasks);
  // let editTask = tasks.find(task => task._id === id);

  // const currentLanguageCode = Cookies.get('i18next');

  const category = [
    { name: 'to-do', en: 'To do', ua: 'Зробити' },
    { name: 'in-progress', en: 'In progress', ua: 'В процесі' },
    { name: 'done', en: 'Done', ua: 'Зроблено' },
  ];

  const [showEditBtn, setShowEditBtn] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const handleClick = () => {
    setIsClicked(prevState => !prevState);
  };

  const handleToggleModal = () => {
    setIsOpened(!isOpened);
  };

  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
    // editTask = { ...editTask, category: event.target.value };

    // dispatch(patchTask({ id: id, task: { category: editTask.category } }));
  }
  let { currentDay } = useParams();
  const onDeleteHendler = async () => {
    await dispatch(deleteTask(id));

    const date = new Date(currentDay);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const reqObj = {
      month,
      day,
      year,
      page: 1,
      limit: 100,
    };
    await dispatch(fetchDayTasks(reqObj));
  };

  const chouseCatRef = useRef(null);
  useEffect(() => {
    const handleChouseCatClickOutside = e => {
      if (chouseCatRef.current && !chouseCatRef.current.contains(e.target)) {
        setIsClicked(false);
      }
    };

    document.addEventListener('mousedown', handleChouseCatClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleChouseCatClickOutside);
    };
  }, []);

  return (
    <S.Wraper>
      <S.BtnArrow>
        <S.BtnStyled
          type="button"
          onClick={() => {
            handleClick();
          }}
        >
          <S.ToolBarItem>
            {/* <use href={`${Icons}#task-move-sf`}></use> */}
          </S.ToolBarItem>
        </S.BtnStyled>

        <S.ChouseCat
          ref={chouseCatRef}
          style={isClicked ? { display: 'flex' } : { display: 'none' }}
        >
          {/* {category.map(item => {
            return (
              item.name !== editTask.category && (
                <div key={Math.random()}>
                  <S.LabelStyled>
                    {currentLanguageCode === 'en' ? item.en : item.ua}
                    <S.ToolBarItem>
                      <use href={`${Icons}#task-move-sf`}></use>
                    </S.ToolBarItem>
                    <S.InputStyled
                      type="radio"
                      value={item.name}
                      checked={selectedOption === item.name}
                      onChange={handleOptionChange}
                    />
                  </S.LabelStyled>
                </div>
              )
            );
          })} */}
        </S.ChouseCat>
      </S.BtnArrow>

      <S.BtnStyled
        type="button"
        onClick={() => {
          handleToggleModal();
          setShowEditBtn(true);
        }}
      >
        <S.ToolBarItem>
          {/* <use href={`${Icons}#task-edit-sf`}></use> */}
        </S.ToolBarItem>
      </S.BtnStyled>

      <S.BtnStyled type="button" onClick={onDeleteHendler}>
        <S.ToolBarItem>
          {/* <use href={`${Icons}#task-trash-sf`}></use> */}
        </S.ToolBarItem>
      </S.BtnStyled>

      {/* {isOpened && (
        <TaskModal
          onCloseModal={handleToggleModal}
          showEditBtn={showEditBtn}
          id={id}
          editTask={editTask}
          addCategory={addCategory}
          isOpened={isOpened}
        />
      )} */}
    </S.Wraper>
  );
};
