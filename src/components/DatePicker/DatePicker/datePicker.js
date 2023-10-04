import React, { useState, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import { DateInfoComponent } from '../showDateInfo/showDateInfo';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerContainer } from './datePicker.styled';
import styles from './datepicker.module.css'
const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDateInfo, setShowDateInfo] = useState(true);

  const handleDateChange = date => {
    setSelectedDate(date);
    setShowDateInfo(true);
    console.log(date);
  };

  useEffect(() => {
    setShowDateInfo(true);
  }, []);

  const handlePrevDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() - 1);
    setSelectedDate(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + 1);
    setSelectedDate(newDate);
  };

  return (
    <DatePickerContainer>
      <div className="navigation">
        <div className={'wrapBox'}>
          <div className={'wrap'}>
            <ReactDatePicker
              selected={selectedDate}
              onSelect={handleDateChange}
              onChange={handleDateChange}
              className={'myDatepicker'}
              calendarClassName={'myCalendar'}
              dateFormat="dd MMM yyyy"
            />
            <div className={'boxButton'}>
              <button className={'buttonLeft'} onClick={handlePrevDay}>
                {'<'}
              </button>
              <button className={'buttonRight'} onClick={handleNextDay}>
                {'>'}
              </button>
            </div>
          </div>

          {showDateInfo && <DateInfoComponent selectedDate={selectedDate} />}
        </div>
      </div>
    </DatePickerContainer>
  );
};

export { DatePicker };
