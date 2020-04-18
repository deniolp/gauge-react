import React from 'react';

import Gauge from './Gauge';

const GaugeComponent = ({
  minSize = 0,
  maxSize = 100,
  initialValue = 70,
  label,
  units,
}) => {
  const [value, setValue] = React.useState(initialValue);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <Gauge
        value={value}
        min={minSize}
        max={maxSize}
        label={label}
        units={units}
      ></Gauge>
      <input
        type="range"
        className="range"
        min={minSize}
        max={maxSize}
        value={value}
        onChange={handleChange}
      ></input>
    </>
  );
};

export default GaugeComponent;
