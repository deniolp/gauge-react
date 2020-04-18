import React from 'react';

import GaugeComponent from './GaugeComponent';

function App() {
  return (
    <div className="contaner">
      <GaugeComponent
        minSize={0}
        maxSize={100}
        initialValue={42}
        label={`Speed`}
        units={`kilometers per hour`}
      ></GaugeComponent>
      <GaugeComponent
        minSize={0}
        maxSize={30}
        initialValue={12}
        label={`Visibility`}
        units={`kilometers`}
      ></GaugeComponent>
      <GaugeComponent
        minSize={0}
        maxSize={4000}
        initialValue={42}
        label={`Pressure`}
        units={`hectopascals`}
      ></GaugeComponent>
    </div>
  );
}

export default App;
