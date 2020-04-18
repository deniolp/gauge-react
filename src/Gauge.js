import React from 'react';

const Gauge = ({value = 50, min = 0, max = 100, label, units}) => {
  return (
    <div>
      <svg
        width="9em"
        viewBox={[-1, -1, 2, 1].join(' ')}
        style={{
          border: '1px solid tomato',
        }}
      ></svg>
    </div>
  );
};
export default Gauge;
