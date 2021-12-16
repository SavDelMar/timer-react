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
  const [isOn, setIsOn] = useState(false);

  const [buttonName, setButtonName] = useState('START');
  const timer = interval(1000);

  function startTimer() {
    if (isOn === true) {
      allSeconds = 1;
    } else {
      allSeconds = seconds + 1;
    }
    timer
      .pipe(
        map(() => allSeconds++),
        takeUntil(fromEvent(document.querySelectorAll('.button--stop'), 'click')),
      )
      .subscribe((res) => {
        setIsOn(true);
        setSeconds(res % 60);
        setMinutes(((res - (res % 60)) % 3600) / 60);
        setHours(Math.floor(res / 3600));
        setButtonName('STOP');
      });
  }

  function stopTimer() {
    setButtonName('START');
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  }
  function pauseTimer() {
    if (isOn === true) {
      document.querySelector('.button--stop').click();
      setButtonName('START');
      setSeconds(seconds);
      setMinutes(minutes);
      setHours(hours);
      setIsOn(false);
    }
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
