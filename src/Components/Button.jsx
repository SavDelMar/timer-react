import React from 'react';

function Button({ name, onClick }) {
  return (
    <div onClick={onClick} className="button">
      {name}
    </div>
  );
}

export default Button;
