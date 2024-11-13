import React from 'react';

function ChildButton(props) {
  return (
    <button onClick={props.onClick}>
      Click Me
    </button>
  );
}

export default ChildButton;