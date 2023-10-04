import { useState } from 'react';
import { format, parseISO, startOfToday, parse } from 'date-fns';
import Icons from '../../images/Statistics/Icons/icon-Ellipse.svg';
import Calendar from './Calendar/Calendar';
import Chart from './StatisticsChart';
import {
  General,
  Option,
  Buttons,
  ButtonData,
  ButtonsIcon,
  ButtonLast,
  IconLast,
  ButtonNext,
  IconNext,
  List,
  Item,
  Icon,
} from './Statistics.styled';

const Statistics = () => {
  const today = startOfToday();
  const [currentDayMonth, setCurrentDayMonth] = useState(
    parseISO(format(today, 'yyyy-MM-dd'))
  );

  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = newDate => {
    const parsedDate = parse(newDate, 'dd MMMM yyyy', new Date());
    setCurrentDayMonth(parsedDate);
    setShowCalendar(false);
  };

  const handleLastDay = () => {
    const newDate = new Date(currentDayMonth);
    newDate.setDate(newDate.getDate() - 1);
    setCurrentDayMonth(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(currentDayMonth);
    newDate.setDate(newDate.getDate() + 1);
    setCurrentDayMonth(newDate);
  };

  const miniCalendar = () => {
    setShowCalendar(prevState => !prevState);
  };

  return (
    <General>
      <Option>
        <Buttons>
          <ButtonData type="button" onClick={miniCalendar}>
            {format(currentDayMonth, 'dd MMMM yyyy')}
          </ButtonData>
          <ButtonsIcon>
            <ButtonLast type="button" onClick={handleLastDay}>
              <IconLast fill="#ffffff" />
            </ButtonLast>
            <ButtonNext type="button" onClick={handleNextDay}>
              <IconNext fill="#ffffff" />
            </ButtonNext>
          </ButtonsIcon>
        </Buttons>
        <List>
          <Item>
            <Icon>
              <use href={`${Icons}#icon-Ellipse-3`}></use>
            </Icon>
            By Day
          </Item>
          <Item>
            <Icon>
              <use href={`${Icons}#icon-Ellipse-4`}></use>
            </Icon>
            By Month
          </Item>
        </List>
      </Option>
      <Chart
        currentDayMonth={currentDayMonth}
        setCurrentDayMonth={setCurrentDayMonth}
      />
      {showCalendar && <Calendar onDateChange={handleDateChange} />}
    </General>
  );
};

export default Statistics;