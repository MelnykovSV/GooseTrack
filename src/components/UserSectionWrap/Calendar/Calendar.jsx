import { InputCalendar } from "./Calendar.styled";

export const Calendar = ({ field, fieldState }) => (
  <InputCalendar
    calendarStartDay={1}
    dropdownMode="select"
    yearDropdownItemNumber={100}
    scrollableYearDropdown
    selected={new Date(field.value)}
    dateFormat="yyyy-MM-dd"
    maxDate={new Date()}
    {...field}
    ref={null}
    status={
      fieldState.error && fieldState.isDirty
        ? 'error'
        : fieldState.isDirty
        ? 'valid'
        : 'default'
    }
  />
);
