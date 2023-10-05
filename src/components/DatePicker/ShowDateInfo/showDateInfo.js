import React, { useEffect, useState } from 'react';
import { Container } from './showDateInfo.styled';

const DateInfoComponent = ({ selectedDate, customInputRef }) => {
  const options = { weekday: 'long', day: 'numeric' };
  const startOfWeek = new Date(selectedDate);
  startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay());

  const daysOfWeek = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    const formattedDate = date.toLocaleDateString('en-US', options);
    daysOfWeek.push(formattedDate);
  }

  const [selectedType, setSelectedType] = useState('days');
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  useEffect(() => {
    if (customInputRef && customInputRef.current) {
      customInputRef.current.focus();
    }
  }, [selectedDate, customInputRef]);

  const handleMonthClick = month => {
    console.log(`${month}`);
  };

  const handleDayClick = day => {
    console.log(`${day}`);
  };

  const handleTypeChange = type => {
    setSelectedType(type);
  };

  return (
    <Container>
      <div className="boxButtonDayMonth">
        <button
          className={`showMonths ${selectedType === 'months' ? 'active' : ''}`}
          onClick={() => handleTypeChange('months')}
        >
          Months
        </button>
        <button
          className={`showDay ${selectedType === 'days' ? 'active' : ''}`}
          onClick={() => handleTypeChange('days')}
        >
          Days
        </button>
      </div>
      {selectedType === 'months' ? (
        <div className="dateBox">
          {months.map((month, index) => (
            <div className="containerMonth" key={index}>
              <p className="dayOfMonth" onClick={() => handleMonthClick(month)}>
                {month.substring(0, 3)}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="dateBox">
          {daysOfWeek.map((day, index) => (
            <div className="dayContainer" key={index}>
              <div className="dateNumber">
                <p className="dateText" onClick={() => handleDayClick(day)}>
                  {day.split(' ')[1].substring(0, 3)}
                </p>
              </div>
              <div
                className={`dayOfWeek ${
                  day === selectedDate.toLocaleDateString('en-US', options)
                    ? 'selected-date'
                    : ''
                }`}
              >
                {day.split(' ')[0].substring(0, 3).toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export { DateInfoComponent };
