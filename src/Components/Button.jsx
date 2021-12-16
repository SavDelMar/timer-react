import React from 'react';

function Button({ name, onClick, onDoubleClick, className }) {
  return (
    <div onClick={onClick} onDoubleClick={onDoubleClick} className={`button ${'' ?? className}`}>
      {name}
    </div>
  );
}

export default Button;
