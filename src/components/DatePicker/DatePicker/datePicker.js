import React, { useState, useEffect, useRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import { DateInfoComponent } from '../showDateInfo/showDateInfo';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerContainer } from './datePicker.styled';

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDateInfo, setShowDateInfo] = useState(true);
  const customInputRef = useRef(null);
  const [selectedMonth] = useState('');

  const handleDateChange = date => {
    setSelectedDate(date);
    setShowDateInfo(true);

    if (customInputRef.current) {
      customInputRef.current.classList.add('selected-date');
    }
  };

  useEffect(() => {
    setShowDateInfo(true);
  }, []);

  const handlePrevDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() - 1);
    setSelectedDate(newDate);
    if (customInputRef.current) {
      customInputRef.current.classList.add('active');
    }
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + 1);
    setSelectedDate(newDate);
    if (customInputRef.current) {
      customInputRef.current.classList.add('active');
    }
  };

  return (
    <DatePickerContainer>
      <div className="navigation">
        <div className={'wrapBox'}>
          <div className={'wrap'}>
            <ReactDatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              className={'myDatepicker'}
              calendarClassName={'myCalendar'}
              dateFormat="dd MMM yyyy"
              customInput={<input ref={customInputRef} />}
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

          {showDateInfo && (
            <DateInfoComponent
              selectedDate={selectedDate}
              customInputRef={customInputRef}
              selectedMonth={selectedMonth}
            />
          )}
        </div>
      </div>
    </DatePickerContainer>
  );
};

export { DatePicker };
