import React, { useState, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import { Container } from './datePicker.styled';

// import { DateInfoComponent } from '../showDateInfo/ShowDateInfo';
import { DateInfoComponent } from '../ShowDateInfo/showDateInfo';
import 'react-datepicker/dist/react-datepicker.css';
// import styles from './datepicker.module.css';

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
    if (selectedDate) {
      const newDate = new Date(selectedDate);
      newDate.setDate(selectedDate.getDate() - 1);
      setSelectedDate(newDate);
    }
  };
  // const SelectedDateComponent = ({ selectedDate }) => {
  //   const options = {
  //     weekday: 'long',
  //     day: 'numeric',
  //   };
  // };
  const handleNextDay = () => {
    if (selectedDate) {
      const newDate = new Date(selectedDate);
      newDate.setDate(selectedDate.getDate() + 1);
      setSelectedDate(newDate);
    }
  };

  return (
    <Container>
      <div className="navigation">
        <div className={'wrapBox'}>
          <div className={'wrap'}>
            <ReactDatePicker
              selected={selectedDate}
              onSelect={handleDateChange}
              onChange={handleDateChange}
              className={'myDatepicker'}
              calendarClassName={'myCalendar'}
              showMonthYearPicker
              dateFormat="MM/yyyy"
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
    </Container>
  );
};

export { DatePicker };
