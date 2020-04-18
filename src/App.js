import React, {useState, useEffect} from 'react';

import GaugeComponent from './GaugeComponent';
import Gauge from './Gauge';

const SECONDS = 1000;

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (time >= SECONDS) {
      return;
    }
    setTimeout(() => {
      setTime(time + 1);
    }, 1000);
  }, [time]);

  return (
    <div className="contaner">
      <Gauge
        min={0}
        max={SECONDS}
        value={time}
        label={`Time spent reading`}
        units={`seconds`}
      ></Gauge>
      <GaugeComponent
        minSize={0}
        maxSize={100}
        initialValue={50}
        label={`Speed`}
        units={`kilometers per hour`}
      ></GaugeComponent>
      <GaugeComponent
        minSize={0}
        maxSize={30}
        initialValue={15}
        label={`Visibility`}
        units={`kilometers`}
      ></GaugeComponent>
      <GaugeComponent
        minSize={0}
        maxSize={4000}
        initialValue={2000}
        label={`Pressure`}
        units={`hectopascals`}
      ></GaugeComponent>
    </div>
  );
}

export default App;
