import React from 'react';
import { Container } from './showDateInfo.styled';
import { useNavigate } from 'react-router';

const DateInfoComponent = ({ selectedDate, pickerType }) => {
  // const [selectedType, setSelectedType] = useState('days');
  const navigate = useNavigate();
  const options = { weekday: 'long', day: 'numeric' };
  const startOfWeek = new Date(selectedDate);
  startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay());

  const daysOfWeek = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    console.log(date);
    const formattedDate = date.toLocaleDateString('en-US', options);
    const navigationDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    daysOfWeek.push({ formattedDate, navigationDate });
  }

  console.log(daysOfWeek);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const handleMonthClick = month => {
    console.log(`${month}`);
  };

  const handleDayClick = day => {
    // console.log(day);

    navigate(`day/${day}`);
  };

  // const handleTypeChange = type => {
  //   setSelectedType(type);
  // };

  return (
    <Container>
      <div className={'container'}>
        {/* <div className={'boxButtonDayMonth'}>
          <button
            className={'showMonths'}
            onClick={() => handleTypeChange('months')}
          >
            Months
          </button>
          <button
            className={'showDay'}
            onClick={() => handleTypeChange('days')}
          >
            Days
          </button>
        </div> */}
        {pickerType === 'month' ? (
          <div className={'dateBox'}>
            {/* {months.map((month, index) => (
              <div className={'containerMonth'} key={index}>
                <p
                  className={'dayOfMonth'}
                  onClick={() => handleMonthClick(month)}
                >
                  {month.substring(0, 3)}
                </p>
              </div>
            ))} */}
            {daysOfWeek.map((day, index) => (
              <div className={'dayContainer'} key={index}>
                {/* <div className={'dayOfWeek'}>
                  {day.split(' ')[0].substring(0, 3).toUpperCase()}
                </div> */}
                <div className={'dateNumber'}>
                  <p
                    className={'dateText'}
                    // onClick={() => handleDayClick(day.navigationDate)}
                  >
                    {day.formattedDate.split(' ')[1].substring(0, 3)}
                  </p>{' '}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={'dateBox'}>
            {daysOfWeek.map((day, index) => (
              <div className={'dayContainer'} key={index}>
                <div className={'dateNumber'}>
                  <p
                    className={'dateText'}
                    onClick={() => handleDayClick(day.navigationDate)}
                  >
                    {day.formattedDate.split(' ')[1].substring(0, 3)}
                  </p>{' '}
                </div>
                <div className={'dayOfWeek'}>
                  {day.formattedDate
                    .split(' ')[0]
                    .substring(0, 3)
                    .toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export { DateInfoComponent };
