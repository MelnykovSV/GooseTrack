import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Menu from '@mui/material/Menu';
import { format, getMonth, getYear } from 'date-fns';

import { useResizeScreen } from 'hooks';

import * as S from './CalendarTable.styled';

import { tasks } from './defaultData';

export const DropDownTaskList = ({ tasks, onOpenTaskModal }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { isMobile, isTablet } = useResizeScreen();

  const menuStyles = (() => {
    if (isMobile) {
      return { maxWidth: 84, paddingX: '2px', paddingY: '4px' };
    } else if (isTablet) {
      return { maxWidth: 112, paddingX: '4px', paddingY: '8px' };
    } else {
      return { maxWidth: 160, paddingX: '4px', paddingY: '8px' };
    }
  })();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <S.MoreButton
        type="button"
        id="more-button"
        aria-controls={open ? 'more-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        More
      </S.MoreButton>
      <Menu
        id="more-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'more-button',
        }}
        sx={{
          '.MuiPaper-root': { ...menuStyles, borderRadius: '8px' },
          '& .MuiList-root': { padding: 0 },
        }}
      >
        {tasks.map(({ id, title, priority }) => (
          <S.MiniCard
            key={id}
            type="button"
            $priority={priority}
            onClick={onOpenTaskModal}
          >
            {title}
          </S.MiniCard>
        ))}
      </Menu>
    </div>
  );
};

const BasicDatePicker = ({ onChangeDate, value }) => {
  return (
    <div style={{ backgroundColor: 'white', marginBottom: 20 }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker
            label={'"month" and "year"'}
            views={['month', 'year']}
            value={value}
            onChange={onChangeDate}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};

export const CalendarTable = () => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();
  const { isMobile, isTablet, isDesktop } = useResizeScreen();

  const tableData = useMemo(() => {
    const year = getYear(date);
    const month = getMonth(date);
    const currentDate = format(new Date(), 'yyyy-MM-dd');
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let firstDayOfWeek = new Date(year, month, 1).getDay();
    let lastDayOfWeek = new Date(year, month, daysInMonth).getDay();

    firstDayOfWeek = firstDayOfWeek === 0 ? 7 : firstDayOfWeek;
    lastDayOfWeek = lastDayOfWeek === 0 ? 7 : lastDayOfWeek;

    const tableCellData = [];

    for (let i = 1; i < firstDayOfWeek; i++) {
      tableCellData.push({ dayOfMonth: null, tasks: [] });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const formattedDate = format(new Date(year, month, i), 'yyyy-MM-dd');

      const rowData = {
        dayOfMonth: i,
        fullDate: formattedDate,
        isCurrentDate: currentDate === formattedDate,
        tasks: tasks.filter(({ date }) => date === formattedDate),
      };

      tableCellData.push(rowData);
    }

    for (let i = lastDayOfWeek; i < 7; i++) {
      tableCellData.push({ dayOfMonth: null, tasks: [] });
    }

    const tableData = [];

    for (let i = 0; i < tableCellData.length; i += 7) {
      tableData.push(tableCellData.slice(i, i + 7));
    }

    return tableData;
  }, [date]);

  const countNumberOfDisplayedTasks = tasks => {
    if (isMobile) {
      return tasks.length > 2 ? 1 : 2;
    } else if (isTablet) {
      return tasks.length > 3 ? 2 : 3;
    } else {
      return tasks.length > 2 ? 1 : 2;
    }
  };

  const handleChooseDayCell = choseDate => e => {
    if (e.target !== e.currentTarget) return;

    navigate(`/calendar/day/${choseDate}`);
  };

  const handleChooseDay = choseDate => () => {
    navigate(`/calendar/day/${choseDate}`);
  };

  const handleOpenTaskModal = () => {
    alert(
      'Клік по завданню з комірки, відкриває модалку для редагування даного завдання, заповнену даними з цього завдання.'
    );
  };

  return (
    <S.TableContainer>
      <BasicDatePicker onChangeDate={value => setDate(value)} value={date} />

      <S.Table>
        {tableData.map((tableRowData, idx) => (
          <S.TableRow key={idx}>
            {tableRowData.map(
              ({ dayOfMonth, fullDate, tasks, isCurrentDate }, idx) => {
                const numberOfDisplayedTasks =
                  countNumberOfDisplayedTasks(tasks);

                const isEmptyCell = dayOfMonth === null;

                return (
                  <S.TableCell
                    key={idx}
                    $isEmpty={isEmptyCell}
                    onClick={
                      isEmptyCell ? () => {} : handleChooseDayCell(fullDate)
                    }
                  >
                    <div className="disabled-hover">
                      <div>
                        {tasks
                          .slice(0, numberOfDisplayedTasks)
                          .map(({ id, title, priority }) => (
                            <S.MiniCard
                              type="button"
                              key={id}
                              $priority={priority}
                              onClick={handleOpenTaskModal}
                            >
                              {title}
                            </S.MiniCard>
                          ))}
                      </div>
                      {((tasks.length > 2 && isMobile) ||
                        (tasks.length > 3 && isTablet) ||
                        (tasks.length > 2 && isDesktop)) && (
                        <DropDownTaskList
                          tasks={tasks}
                          onOpenTaskModal={handleOpenTaskModal}
                        />
                      )}
                    </div>
                    {dayOfMonth && (
                      <S.DayOfMonthContainer
                        className="container"
                        $isCurrentDate={isCurrentDate}
                        onClick={handleChooseDay(fullDate)}
                      >
                        <S.DayOfMonth
                          className="value"
                          $isCurrentDate={isCurrentDate}
                        >
                          {dayOfMonth}
                        </S.DayOfMonth>
                      </S.DayOfMonthContainer>
                    )}
                  </S.TableCell>
                );
              }
            )}
          </S.TableRow>
        ))}
      </S.Table>
    </S.TableContainer>
  );
};
