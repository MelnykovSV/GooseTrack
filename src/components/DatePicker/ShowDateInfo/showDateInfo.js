import React from 'react';

const DateInfoComponent = ({ selectedDate }) => {
  const options = { weekday: 'long', day: 'numeric' };
  const startOfWeek = new Date(selectedDate);
  startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay());

  const daysOfWeek = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    const formattedDate = date.toLocaleDateString('en-US', options);
    daysOfWeek.push(formattedDate);
  }

  return (
    <div>
      {daysOfWeek.map((day, index) => (
        <p key={index}>{day}</p>
      ))}
    </div>
  );
};

export default DateInfoComponent;
