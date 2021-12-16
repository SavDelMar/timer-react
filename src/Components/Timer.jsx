import React from 'react';

function Timer({ sec, min, h }) {
  let timerValue = `${h > 9 ? h : `0${h}`} : ${min > 9 ? min : `0${min}`} : ${
    sec > 9 ? sec : `0${sec}`
  }`;
  return <div className={`timer`}>{timerValue}</div>;
}

export default Timer;
