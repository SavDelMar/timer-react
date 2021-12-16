import React, { useState } from 'react';
import { Button, ButtonWait } from './Buttons';

function Controls({ start, stop, pause, reset, buttonStartStopName }) {
  const [seconds, setSeconds] = useState(0);
  const [differ, setDiffer] = useState(0);

  let onClick = function () {
    let thisClickTime = new Date().getTime();
    setDiffer(thisClickTime - seconds);
    setSeconds(thisClickTime);
  };
  function onDoubleClickPause() {
    pause();
    console.log(`${differ} ms between clicks`);
  }

  return (
    <div className="controls">
      <Button onClick={buttonStartStopName === 'START' ? start : stop} name={buttonStartStopName} />
      <ButtonWait
        onDoubleClick={
          differ < 300 ? onDoubleClickPause : console.log(`more 300 then ms between clicks`)
        }
        onClick={onClick}
        name={'WAIT'}
      />
      <Button onClick={reset} name={'RESET'} />
    </div>
  );
}

export default Controls;
