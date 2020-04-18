import React from 'react';

import GaugeComponent from './GaugeComponent';

function App() {
  return (
    <div className="center">
      <GaugeComponent
        min={0}
        max={100}
        initialValue={42}
        label={`Speed`}
        units={`kilometers per hour`}
      ></GaugeComponent>
      <GaugeComponent
        min={0}
        max={30}
        initialValue={12}
        label={`Visibility`}
        units={`kilometers`}
      ></GaugeComponent>
      <GaugeComponent
        min={0}
        max={4000}
        initialValue={42}
        label={`Pressure`}
        units={`hectopascals`}
      ></GaugeComponent>
    </div>
  );
}

export default App;
