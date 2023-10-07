import React, { useState, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import { DateInfoComponent } from '../ShowDateInfo/showDateInfo';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerContainer } from './datePicker.styled';
import { useNavigate } from 'react-router';
import { parse } from 'date-fns';
import { useParams } from 'react-router';

// import styles from './datepicker.module.css'
const DatePicker = () => {
  const navigate = useNavigate();
  const { day, month } = useParams();

  function checkParams() {
    if (day) {
      return { date: day, pattern: 'yyyy-MM-dd' };
    }
    if (month) {
      return { date: month, pattern: 'yyyy-MM' };
    } else {
      return null;
    }
  }
  function checkPageType() {
    if (day) {
      return 'day';
    }
    if (month) {
      return 'month';
    } else {
      return null;
    }
  }
  const [selectedDate, setSelectedDate] = useState(
    checkParams()
      ? parse(checkParams().date, checkParams().pattern, new Date())
      : new Date()
  );
  const [pickerType, setPickerType] = useState(checkPageType() || 'month');
  // const [showDateInfo, setShowDateInfo] = useState(true);

  const handleDateChange = date => {
    setSelectedDate(date);
    // setShowDateInfo(true);
    console.log(date);
  };

  // useEffect(() => {
  //   if (checkParams()) {
  //     setSelectedDate(
  //       parse(checkParams().date, checkParams().pattern, new Date())
  //     );
  //   }
  // }, [day, month]);

  useEffect(() => {
    if (pickerType === 'month') {
      const selectedMonth = `${selectedDate.getFullYear()}-${
        selectedDate.getMonth() + 1
      }`;
      navigate(`month/${selectedMonth}`);
    } else {
      const selectedDay = `${selectedDate.getFullYear()}-${(
        selectedDate.getMonth() + 1
      )
        .toString()
        .padStart(2, '0')}-${selectedDate
        .getDate()
        .toString()
        .padStart(2, '0')}`;
      navigate(`day/${selectedDay}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate, pickerType]);

  const handlePrevDay = () => {
    const newDate = new Date(selectedDate);
    if (pickerType === 'month') {
      newDate.setMonth(selectedDate.getMonth() - 1);
    } else {
      newDate.setDate(selectedDate.getDate() - 1);
    }

    setSelectedDate(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate);
    if (pickerType === 'month') {
      newDate.setMonth(selectedDate.getMonth() + 1);
    } else {
      newDate.setDate(selectedDate.getDate() + 1);
    }
    setSelectedDate(newDate);
  };

  const handleTypeChange = type => {
    setPickerType(type);
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
              dateFormat={pickerType === 'month' ? 'MMMM yyyy' : 'dd MMM yyyy'}
              showMonthYearPicker={pickerType === 'month'}
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
          <div className={'boxButtonDayMonth'}>
            <button
              // className={'showMonths'}
              className={
                pickerType === 'month' ? 'showMonths active' : 'showMonths'
              }
              onClick={() => handleTypeChange('month')}
            >
              Months
            </button>
            <button
              // className={'showDay'}
              className={pickerType === 'month' ? 'showDay' : 'showDay active'}
              onClick={() => handleTypeChange('day')}
            >
              Days
            </button>
          </div>

          <DateInfoComponent
            selectedDate={selectedDate}
            pickerType={pickerType}
          />
        </div>
      </div>
    </DatePickerContainer>
  );
};

export { DatePicker };
