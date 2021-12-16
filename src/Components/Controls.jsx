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

  return (
    <div className="controls">
      <Button onClick={buttonStartStopName === 'START' ? start : stop} name={buttonStartStopName} />
      <ButtonWait
        onDoubleClick={differ < 300 ? pause : console.log('more then 300ms')}
        onClick={onClick}
        name={'WAIT'}
      />
      <Button onClick={reset} name={'RESET'} />
    </div>
  );
}

export default Controls;
