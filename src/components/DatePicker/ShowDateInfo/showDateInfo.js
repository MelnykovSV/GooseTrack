import React from 'react';
import { Container } from './showDateInfo.styled';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { parse, format } from 'date-fns';
import { checkParams, checkPageType } from '../DatePicker/dateParamsHelpers';
import useMediaQuery from '@mui/material/useMediaQuery';

const DateInfoComponent = () => {
  const isMatches = useMediaQuery('(min-width:768px)');
  const { day, month } = useParams();
  const selectedDate = checkParams(day, month)
    ? parse(
        checkParams(day, month).date,
        checkParams(day, month).pattern,
        new Date()
      )
    : new Date();

  const pickerType = checkPageType(day, month);
  const navigate = useNavigate();
  const options = { weekday: 'long', day: 'numeric' };
  const startOfWeek = new Date(selectedDate);

  console.log(startOfWeek);
  startOfWeek.setDate(
    selectedDate.getDate() -
      selectedDate.getDay() +
      (selectedDate.getDay() === 0 ? -6 : 1)
  );
  console.log(startOfWeek);

  const daysOfWeek = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    const formattedDate = date.toLocaleDateString('en-US', options);
    const navigationDate = `${format(date, 'yyyy-MM-dd')}`;
    daysOfWeek.push({ formattedDate, navigationDate });
  }

  console.log(daysOfWeek);

  const handleDayClick = day => {
    navigate(`day/${day}`);
  };

  return (
    <Container>
      <div>
        {pickerType === 'month' ? (
          <div className={'dateBox'}>
            {daysOfWeek.map((day, index) => (
              <div className={'dayContainer'} key={index}>
                <div className={'dateNumber'}>
                  <p
                    className={
                      index === 6 || index === 5
                        ? 'dateText month weakend'
                        : 'dateText month'
                    }
                  >
                    {isMatches
                      ? day.formattedDate.split(' ')[1].substring(0, 3)
                      : day.formattedDate.split(' ')[1].substring(0, 1)}
                  </p>{' '}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={'dateBox'}>
            {daysOfWeek.map((item, index) => (
              <div
                className={
                  day === item.navigationDate
                    ? 'dayContainer day current'
                    : 'dayContainer day'
                }
                onClick={() => handleDayClick(item.navigationDate)}
                key={index}
              >
                <div className={'dateNumber'}>
                  <p className={'dateText'}>
                    {isMatches
                      ? item.formattedDate.split(' ')[1].substring(0, 3)
                      : item.formattedDate.split(' ')[1].substring(0, 1)}
                  </p>{' '}
                </div>
                <div className={'dayOfWeek'}>
                  {item.formattedDate
                    .split(' ')[0]
                    .substring(0, 3)
                    .toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export { DateInfoComponent };
