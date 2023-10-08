import { Outlet } from 'react-router';
import { DatePicker } from '../../components/DatePicker/datePicker/datePicker';

export const CalendarDatepickerPage = () => {
  return (
    <div>
      <h2>Datepicker will be here</h2>
      <DatePicker />
      <Outlet />
    </div>
  );
};
