import React from 'react';
import { Container } from './showDateInfo.styled';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { parse, format } from 'date-fns';
import { checkParams, checkPageType } from '../datePicker/dateParamsHelpers';

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
  // const options = { weekday: 'long', day: 'numeric' };
  const startOfWeek = new Date(selectedDate);
  startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay());

  const daysOfWeek = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    const formattedDate = date.toLocaleDateString('en-US', {
      day: 'numeric',
    });
    const navigationDate = `${format(date, 'yyyy-MM-dd')}`;
    daysOfWeek.push({ formattedDate, navigationDate, date });
  }

  const handleDayClick = day => {
    navigate(`day/${day}`);
  };

  return (
    <div className="containerMain" style={{ width: '100%' }}>
      <Container>
        <div className={'dateBoxMain'}>
          {pickerType === 'month' ? (
            <div className={'date'}>
              {daysOfWeek.map((day, index) => (
                <div className={'dayContainerBox'} key={index}>
                  <div className={'dateNumberBox'}>
                    <p className="dayOfWeek">
                      {day.date.toLocaleDateString('en-US', {
                        weekday: 'long',
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={'date'}>
              {daysOfWeek.map((day, index) => (
                <div
                  className={'dayContainer'}
                  onClick={() => handleDayClick(day.navigationDate)}
                  key={index}
                >
                  <div className={'dateNumberBox'}>
                    <p
                      className={`dayOfWeek ${
                        day.navigationDate ===
                        format(selectedDate, 'yyyy-MM-dd')
                          ? 'selected-date'
                          : ''
                      }`}
                    >
                      {day.formattedDate}
                    </p>
                    <p className="dayOfWeek">
                      {day.date.toLocaleDateString('en-US', {
                        weekday: 'short',
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export { DateInfoComponent };
