import React, { useState, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import { DateInfoComponent } from '../ShowDateInfo/showDateInfo';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerContainer } from './datePicker.styled';
import { useNavigate } from 'react-router';
import { parse, format } from 'date-fns';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { checkParams, checkPageType } from './dateParamsHelpers';
// import { format, getMonth, getYear, parse } from 'date-fns';

// import styles from './datepicker.module.css'
const DatePicker = () => {
  const navigate = useNavigate();
  const { day, month } = useParams();

  useEffect(() => {
    if (!day && !month) {
      navigate(`month/${format(new Date(), 'yyyy-MM')}`);
    }
  }, []);

  console.log(checkParams(day, month));

  const [selectedDate, setSelectedDate] = useState(
    checkParams(day, month)
      ? parse(
          checkParams(day, month).date,
          checkParams(day, month).pattern,
          new Date()
        )
      : new Date()
  );

  const [pickerType, setPickerType] = useState(checkPageType());

  const handleDateChange = date => {
    setSelectedDate(date);
    navigate()
  };

  useEffect(() => {
    setSelectedDate(
      parse(
        checkParams(day, month).date,
        checkParams(day, month).pattern,
        new Date()
      )
    );
  }, [day]);

  // useEffect(() => {
  //   if (pickerType === 'month') {
  //     const selectedMonth = `${selectedDate.getFullYear()}-${
  //       selectedDate.getMonth() + 1
  //     }`;
  //     navigate(`month/${selectedMonth}`);
  //   } else {
  //     const selectedDay = `${selectedDate.getFullYear()}-${(
  //       selectedDate.getMonth() + 1
  //     )
  //       .toString()
  //       .padStart(2, '0')}-${selectedDate
  //       .getDate()
  //       .toString()
  //       .padStart(2, '0')}`;
  //     navigate(`day/${selectedDay}`);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [selectedDate, pickerType]);

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
              dateFormat={
                checkPageType(day, month) === 'month'
                  ? 'MMMM yyyy'
                  : 'dd MMM yyyy'
              }
              showMonthYearPicker={
                checkPageType(day, month) === 'month' ? true : false
              }
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
          {/* <div className={'boxButtonDayMonth'}>
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
          </div> */}
          <nav>
            <NavLink
              to={`month/${selectedDate.getFullYear()}-${
                selectedDate.getMonth() + 1
              }`}
            >
              Month
            </NavLink>
            <NavLink
              to={`day/${selectedDate.getFullYear()}-${(
                selectedDate.getMonth() + 1
              )
                .toString()
                .padStart(2, '0')}-${selectedDate
                .getDate()
                .toString()
                .padStart(2, '0')}`}
            >
              Day
            </NavLink>
            {/* <NavLink
              to={`day/${
                checkParams(day, month)
                  ? checkParams(day, month).date
                  : format(new Date(), 'yyyy-MM-dd')
              }`}
            >
              Day
            </NavLink> */}
          </nav>

          <DateInfoComponent
          // selectedDate={selectedDate}
          // pickerType={pickerType}
          />
        </div>
      </div>
    </DatePickerContainer>
  );
};

export { DatePicker };
