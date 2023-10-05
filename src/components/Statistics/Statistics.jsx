import { useState } from 'react';
import { format, parseISO, startOfToday, parse } from 'date-fns';
import Calendar from './Calendar/Calendar';
import Chart from './StatisticsChart';
import {
  General,
  Option,
  Buttons,
  ButtonData,
  IconNext,
  List,
  Item,
  Icon,
  Arrow,
  Arrows,
  IconPrev,
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
          <Arrows>
            <Arrow prev type="button" onClick={handleLastDay}>
              <IconPrev />
            </Arrow>
            <Arrow next type="button" onClick={handleNextDay}>
              <IconNext />
            </Arrow>
          </Arrows>
        </Buttons>
        <List>
          <Item>
            <Icon showFor="day" />
            By Day
          </Item>
          <Item>
            <Icon showFor="month" />
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
