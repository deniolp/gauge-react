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
    <div className="gaugeComp">
      <Gauge
        value={value}
        min={minSize}
        max={maxSize}
        label={label}
        units={units}
      ></Gauge>
      <label for={label}>
        <h6>Update value</h6>
      </label>
      <input
        type="range"
        className="range"
        id={label}
        min={minSize}
        max={maxSize}
        value={value}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default GaugeComponent;
