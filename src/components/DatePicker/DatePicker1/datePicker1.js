import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { SelectedDateComponent } from '../SelectedDate/selectedDate';
import DateInfoComponent from '../ShowDateInfo/showDateInfo';
import WeekView from './WeekView';
import styles from './datepicker.module.css';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDateInfo, setShowDateInfo] = useState(false);

  const handleDateChange = date => {
    setSelectedDate(date);
    setShowDateInfo(true);
  };

  const subtractDay = () => {
    if (selectedDate) {
      const newDate = new Date(selectedDate);
      newDate.setDate(selectedDate.getDate() - 1);
      setSelectedDate(newDate);
    }
  };

  const addDay = () => {
    if (selectedDate) {
      const newDate = new Date(selectedDate);
      newDate.setDate(selectedDate.getDate() + 1);
      setSelectedDate(newDate);
    }
  };

  return (
    <>
      <h1 className={styles.a}>dasdas</h1>
      <div>
        <button onClick={subtractDay} className={styles.button}>
          ←
        </button>
        <DatePicker selected={selectedDate} onChange={handleDateChange} />
        <button onClick={addDay} className={styles.button}>
          →
        </button>
        {selectedDate && <SelectedDateComponent selectedDate={selectedDate} />}
        {showDateInfo && <DateInfoComponent selectedDate={selectedDate} />}
        {selectedDate && <WeekView startDate={selectedDate} />}{' '}
      </div>
    </>
  );
};

export { CustomDatePicker };
