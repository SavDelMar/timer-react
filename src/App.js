import './App.css';
import Timer from './Components/Timer';
import Controls from './Components/Controls';
import { map, interval, takeUntil, fromEvent } from 'rxjs';
import { useState } from 'react';

function App() {
  let allSeconds = 1;
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [buttonName, setButtonName] = useState('START');

  // let time = interval(1000);
  const subscription = interval(1000);
  function startTimer() {
    subscription
      .pipe(
        map((v) => allSeconds++),
        takeUntil(fromEvent(document.querySelector('.controls'), 'click')),
      )
      .subscribe((res) => {
        setSeconds(res % 60);
        setMinutes(((res - (res % 60)) % 3600) / 60);
        setHours(Math.floor(res / 3600));
        setButtonName('STOP');
      });
  }

  function stopTimer() {
    console.log('i cant stop');
    setButtonName('START');
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  }
  function pauseTimer() {
    console.log('i cant paused');
    console.log(seconds, minutes, hours);
  }
  function resetTimer() {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    startTimer();
  }
  return (
    <div className="App">
      <Timer sec={seconds} min={minutes} h={hours} />
      <Controls
        start={startTimer}
        stop={stopTimer}
        pause={pauseTimer}
        reset={resetTimer}
        buttonStartStopName={buttonName}
      />
    </div>
  );
}

export default App;
