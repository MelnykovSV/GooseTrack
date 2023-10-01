import React, { useState } from 'react'; // Додайте { useState }

import DatePicker from 'react-datepicker';
import { SelectedDateComponent } from '../SelectedDate/selectedDate';
import DateInfoComponent from '../ShowDateInfo/showDateInfo';
import 'react-datepicker/dist/react-datepicker.css';

const DataPicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDateInfo, setShowDateInfo] = useState(false); // Додайте стан для показу DateInfoComponent

  const handleDateChange = date => {
    setSelectedDate(date);
    setShowDateInfo(true); // Показати DateInfoComponent при зміні дати
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onSelect={handleDateChange}
        onChange={handleDateChange}
      />
      {selectedDate && <SelectedDateComponent selectedDate={selectedDate} />}
      {showDateInfo && <DateInfoComponent selectedDate={selectedDate} />}{' '}
      {/* Відображення DateInfoComponent */}
    </div>
  );
};

export { DataPicker };
