import './App.css';
import Timer from './Components/Timer';
import Controls from './Components/Controls';
import { interval, map } from 'rxjs';
import { useState } from 'react';

function App() {
  let allSeconds = 3500;
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [buttonName, setButtonName] = useState('START');

  function startTimer() {
    interval(1000)
      .pipe(map((v) => allSeconds++))
      .subscribe((res) => {
        setSeconds(res % 60);
        setMinutes(((res - (res % 60)) % 3600) / 60);
        setHours(Math.floor(res / 3600));
        setButtonName('STOP');
      });
  }
  function stopTimer() {
    console.log('i cant stop');
  }
  return (
    <div className="App">
      <Timer sec={seconds} min={minutes} h={hours} />
      <Controls start={startTimer} stop={stopTimer} buttonStartStopName={buttonName} />
    </div>
  );
}

export default App;
