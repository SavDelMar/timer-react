import React from 'react';
import Button from './Button';

function Controls() {
  function startTimer(params) {
    console.log('start');
  }
  function pauseTimer(params) {
    console.log('pause');
  }
  function resetTimer(params) {
    console.log('reset');
  }
  return (
    <div className="controls">
      <Button onClick={startTimer} name={'start/stop'} />
      <Button onClick={pauseTimer} name={'wait'} />
      <Button onClick={resetTimer} name={'reset'} />
    </div>
  );
}

export default Controls;
