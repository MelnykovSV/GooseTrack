import { CalendarTable } from 'components/CalendarTable';
import { Outlet } from 'react-router';

const CalendarPage = () => {
  return (
    <>
      <div>calendar</div>
      <CalendarTable />
      <Outlet />
    </>
  );
};

export default CalendarPage;
