import React, { useState, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import { DateInfoComponent } from '../showDateInfo/showDateInfo';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerContainer } from './datePicker.styled';
import { useNavigate } from 'react-router';
import { parse, format } from 'date-fns';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { checkParams, checkPageType } from './dateParamsHelpers';

const DatePicker = () => {
  const navigate = useNavigate();
  const { day, month } = useParams();

  const handleDateChange = date => {
    setSelectedDate(date);
    if (pickerType === 'month') {
      navigate(`month/${format(date, 'yyyy-MM')}`);
    }

    if (pickerType === 'day') {
      navigate(`day/${format(date, 'yyyy-MM-dd')}`);
    }
  };

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

  useEffect(() => {
    if (!day && !month) {
      navigate(`month/${format(new Date(), 'yyyy-MM')}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const params = checkParams(day, month);
    setSelectedDate(
      params ? parse(params.date, params.pattern, new Date()) : new Date()
    );

    setPickerType(checkPageType(day, month) || 'month');
  }, [day, month]);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [pickerType, setPickerType] = useState(checkPageType() || 'month');

  return (
    <div className={'containerDatePicker'}>
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
                  pickerType === 'month' ? 'MMMM yyyy' : 'dd MMM yyyy'
                }
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

            <nav className={'boxButtonDayMonth'}>
              <NavLink
                className={
                  pickerType === 'month' ? 'showMonths active' : 'showMonths'
                }
                to={`month/${format(selectedDate, 'yyyy-MM')}`}
                onClick={() => {
                  handleTypeChange('month');
                }}
              >
                Month
              </NavLink>
              <NavLink
                className={
                  pickerType === 'month' ? 'showDay' : 'showDay active'
                }
                to={`day/${format(selectedDate, 'yyyy-MM-dd')}`}
                onClick={() => {
                  handleTypeChange('day');
                }}
              >
                Day
              </NavLink>
            </nav>

            <DateInfoComponent
              selectedDate={selectedDate}
              pickerType={pickerType}
            />
          </div>
        </div>
      </DatePickerContainer>
    </div>
  );
};

export { DatePicker };
