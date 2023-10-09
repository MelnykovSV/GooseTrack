import { Outlet } from 'react-router';
import { DatePicker } from 'components/DatePicker/DatePicker/datePicker';

export const CalendarDatepickerPage = () => {
  return (
    <div>
      <DatePicker />
      <Outlet />
    </div>
  );
};
