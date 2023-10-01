import React from 'react';

// const SelectedDateComponent = ({ selectedDate }) => {
//   return (
//     <div>
//       <h2>{selectedDate.toLocaleDateString()}</h2>
//     </div>
//   );
// };

// export { SelectedDateComponent };
const SelectedDateComponent = ({ selectedDate }) => {
  const options = {
    weekday: 'long',
    // year: 'numeric',
    // month: 'long',
    day: 'numeric',
  };
  const formattedDate = selectedDate.toLocaleDateString('en-US', options);

  return (
    <div>
      <h2></h2>
    </div>
  );
};

export { SelectedDateComponent };
