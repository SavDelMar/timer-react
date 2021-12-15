import React from 'react';
import Button from './Button';

function Controls({ start, stop, pause, reset, buttonStartStopName }) {
  return (
    <div className="controls">
      <Button onClick={buttonStartStopName === 'START' ? start : stop} name={buttonStartStopName} />
      <Button onClick={pause} name={'wait'} />
      <Button onClick={reset} name={'reset'} />
    </div>
  );
}

export default Controls;
