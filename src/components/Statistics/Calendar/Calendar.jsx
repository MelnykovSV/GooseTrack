import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { MiniCalendar } from './Calendar.styled';
import { format } from 'date-fns';

const Calendar = ({ onDateChange }) => {
  const handleDateChange = date => {
    const formattedDate = format(date, 'dd MMMM yyyy');
    onDateChange(formattedDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MiniCalendar>
        <DateCalendar className="styles" onChange={handleDateChange} />
      </MiniCalendar>
    </LocalizationProvider>
  );
};

export default Calendar;