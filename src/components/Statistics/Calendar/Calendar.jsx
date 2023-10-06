import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Calendar from 'react-calendar';
import { MiniCalendar } from './Calendar.styled';
import { format } from 'date-fns';
import { useState } from 'react';

const CustomCalendar = ({ onDateChange }) => {
  const [date] = useState(new Date());

  const handleDateChange = date => {
    const formattedDate = format(date, 'dd MMMM yyyy');
    onDateChange(formattedDate);
  };

  const formatDayOfWeek = (_, date) => {
    return format(date, 'EEEEE');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MiniCalendar>
        <Calendar
          onChange={handleDateChange}
          value={date}
          prev2Label={null}
          next2Label={null}
          prevLabel={<FaChevronLeft />}
          nextLabel={<FaChevronRight />}
          formatShortWeekday={formatDayOfWeek}
          view="days"
        />
      </MiniCalendar>
    </LocalizationProvider>
  );
};

export default CustomCalendar;
