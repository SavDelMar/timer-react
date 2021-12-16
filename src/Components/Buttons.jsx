import React from 'react';

export function Button({ name, onClick, onDoubleClick }) {
  return (
    <div onClick={onClick} onDoubleClick={onDoubleClick} className={`button button--stop`}>
      {name}
    </div>
  );
}
export function ButtonWait({ name, onDoubleClick, onClick }) {
  return (
    <div onClick={onClick} onDoubleClick={onDoubleClick} className={`button button--wait`}>
      {name}
    </div>
  );
}
