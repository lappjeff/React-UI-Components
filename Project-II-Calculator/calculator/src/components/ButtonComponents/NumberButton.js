import React from 'react';
import './Button.css';

const NumberButton = function(props) {
  return (
    <div className={`${props.buttonStyles}`}>{`${props.text}`}</div>
  )
}

NumberButton.defaultProps = {
  buttonStyles: 'defaultStyles'
}

export default NumberButton
