import { Outlet } from 'react-router';
import { DatePicker } from '../../components/DatePicker/datePicker/datePicker';

export const CalendarDatepickerPage = () => {
  return (
    <div>
     
      <DatePicker />
      <Outlet />
    </div>
  );
};
