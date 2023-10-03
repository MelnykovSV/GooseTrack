import { CalendarTable } from 'components/CalendarTable';
import { TasksColumnsList } from 'components/TasksComponents';
import { Outlet } from 'react-router';

const CalendarPage = () => {
  return (
    <>
      <div>calendar</div>
      {/* <CalendarTable /> */}
      <TasksColumnsList />
      <Outlet />
    </>
  );
};

export default CalendarPage;
