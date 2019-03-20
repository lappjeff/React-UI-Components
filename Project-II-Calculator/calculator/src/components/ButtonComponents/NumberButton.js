import React from 'react';
import './Button.css';


const NumberButton = function(props) {
  return (
    <div className={`defaultStyles ${props.buttonStyles}`}>
      {`${props.text}`}
    </div>
  )
}



export default NumberButton
