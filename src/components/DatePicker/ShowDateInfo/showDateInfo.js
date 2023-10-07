import React from 'react';
import { Container } from './showDateInfo.styled';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { parse, format } from 'date-fns';
import { checkParams, checkPageType } from '../DatePicker/dateParamsHelpers';

const DateInfoComponent = () => {
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
  startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay());

  const daysOfWeek = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    const formattedDate = date.toLocaleDateString('en-US', options);
    const navigationDate = `${format(date, 'yyyy-MM-dd')}`;
    daysOfWeek.push({ formattedDate, navigationDate });
  }

  const handleDayClick = day => {
    navigate(`day/${day}`);
  };

  return (
    <Container>
      <div className={'container'}>
        {pickerType === 'month' ? (
          <div className={'dateBox'}>
            {daysOfWeek.map((day, index) => (
              <div className={'dayContainer'} key={index}>
                <div className={'dateNumber'}>
                  <p className={'dateText'}>
                    {day.formattedDate.split(' ')[1].substring(0, 3)}
                  </p>{' '}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={'dateBox'}>
            {daysOfWeek.map((day, index) => (
              <div
                className={'dayContainer'}
                onClick={() => handleDayClick(day.navigationDate)}
                key={index}
              >
                <div className={'dateNumber'}>
                  <p className={'dateText'}>
                    {day.formattedDate.split(' ')[1].substring(0, 3)}
                  </p>{' '}
                </div>
                <div className={'dayOfWeek'}>
                  {day.formattedDate
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
