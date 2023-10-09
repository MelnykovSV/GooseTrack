import React, { useState, useEffect, forwardRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import { DateInfoComponent } from '../ShowDateInfo/showDateInfo';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerContainer } from './datePicker.styled';
import { useNavigate } from 'react-router';
import { parse, format } from 'date-fns';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { checkParams, checkPageType } from './dateParamsHelpers';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const DatePicker = () => {
  const navigate = useNavigate();
  const { day, month } = useParams();

  useEffect(() => {
    if (!day && !month) {
      navigate(`month/${format(new Date(), 'yyyy-MM')}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(checkParams(day, month));

  const Datepickerinput = forwardRef(({ value, onClick }, ref) => (
    <button className="myDatepicker" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  const [selectedDate, setSelectedDate] = useState(
    checkParams(day, month)
      ? parse(
          checkParams(day, month).date,
          checkParams(day, month).pattern,
          new Date()
        )
      : new Date()
  );

  const [pickerType, setPickerType] = useState(checkPageType() || 'month');

  const handleDateChange = date => {
    console.log('handleDateChange');
    console.log(pickerType);
    setSelectedDate(date);
    if (pickerType === 'month') {
      navigate(`month/${format(date, 'yyyy-MM')}`);
    }

    if (pickerType === 'day') {
      navigate(`day/${format(date, 'yyyy-MM-dd')}`);
    }
  };

  useEffect(() => {
    checkParams(day, month)
      ? setSelectedDate(
          parse(
            checkParams(day, month).date,
            checkParams(day, month).pattern,
            new Date()
          )
        )
      : new Date();

    setPickerType(checkPageType(day, month) || 'month');
  }, [day, month]);

  const handlePrevDay = () => {
    const newDate = new Date(selectedDate);
    if (pickerType === 'month') {
      newDate.setMonth(selectedDate.getMonth() - 1);
      navigate(`month/${format(newDate, 'yyyy-MM')}`);
    } else {
      newDate.setDate(selectedDate.getDate() - 1);
      navigate(`day/${format(newDate, 'yyyy-MM-dd')}`);
    }

    setSelectedDate(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate);
    if (pickerType === 'month') {
      newDate.setMonth(selectedDate.getMonth() + 1);
      navigate(`month/${format(newDate, 'yyyy-MM')}`);
    } else {
      newDate.setDate(selectedDate.getDate() + 1);
      navigate(`day/${format(newDate, 'yyyy-MM-dd')}`);
    }
    setSelectedDate(newDate);
  };

  const handleTypeChange = type => {
    setPickerType(type);
  };

  return (
    <DatePickerContainer>
      <div className="navigation">
        <div className="date-controllers-wrapper">
          <div className={'wrap'}>
            <ReactDatePicker
              customInput={<Datepickerinput />}
              selected={selectedDate}
              onSelect={handleDateChange}
              onChange={handleDateChange}
              calendarClassName={'myCalendar'}
              dateFormat={pickerType === 'month' ? 'MMMM yyyy' : 'dd MMM yyyy'}
              showMonthYearPicker={pickerType === 'month' ? true : false}
              calendarStartDay={1}
              className="calendar-datepicker"
            />
            <div className={'boxButton'}>
              <button className={'buttonLeft button'} onClick={handlePrevDay}>
                {<FaChevronLeft />}
              </button>
              <button className={'buttonRight button'} onClick={handleNextDay}>
                {<FaChevronRight />}
              </button>
            </div>
          </div>
          <nav className={'boxButtonDayMonth'}>
            <NavLink
              className={'showMonths'}
              to={`month/${format(selectedDate, 'yyyy-MM')}`}
              onClick={() => {
                handleTypeChange('month');
              }}
            >
              Month
            </NavLink>
            <NavLink
              className={'showDay'}
              to={`day/${format(selectedDate, 'yyyy-MM-dd')}`}
              onClick={() => {
                handleTypeChange('day');
              }}
            >
              Day
            </NavLink>
          </nav>
        </div>

        <DateInfoComponent />
      </div>
    </DatePickerContainer>
  );
};

export { DatePicker };
