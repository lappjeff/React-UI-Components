import React from 'react';
import './Button.css';

const numbers = [1,2,3,4,5,6,7,8,9]

const NumberButton = function(props) {
  return (
    <div className={`defaultStyles ${props.buttonStyles}`}>
      {`${props.text}`}
    </div>
  )
}



export default NumberButton
