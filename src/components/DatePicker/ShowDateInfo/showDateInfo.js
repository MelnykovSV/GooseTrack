import React, { useState } from 'react';
import styles from './showDateinfo.module.css';

const DateInfoComponent = ({ selectedDate }) => {
  const [selectedType, setSelectedType] = useState('days');

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

  const handleMonthClick = month => {
    // додати таску
    console.log(`${month}`);
  };

  const handleDayClick = day => {
    console.log(`${day}`);
  };

  const handleTypeChange = type => {
    setSelectedType(type);
  };

  return (
    <div className={styles.container}>
      <div className={styles.boxButtonDayMonth}>
        <button
          className={styles.showMonths}
          onClick={() => handleTypeChange('months')}
        >
          Months
        </button>
        <button
          className={styles.showDay}
          onClick={() => handleTypeChange('days')}
        >
          Days
        </button>
      </div>
      {selectedType === 'months' ? (
        <div className={styles.dateBox}>
          {months.map((month, index) => (
            <div className={styles.containerMonth}>
              <p
                className={styles.dayOfMonth}
                key={index}
                onClick={() => handleMonthClick(month)}
              >
                {month.substring(0, 3)}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.dateBox}>
          {daysOfWeek.map((day, index) => (
            <div
              className={styles.dayContainer}
              key={index}
              onClick={() => handleDayClick(day)}
            >
              <div className={styles.dayOfWeek}>
                {day.split(' ')[0].substring(0, 3).toUpperCase()}
              </div>
              <div className={styles.dateNumber}>
                <p className={styles.dateText}>
                  {day.split(' ')[1].substring(0, 3)}
                </p>{' '}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { DateInfoComponent };
