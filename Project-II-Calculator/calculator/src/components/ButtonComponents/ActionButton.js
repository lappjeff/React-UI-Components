import React from 'react';
import './Button.css';

const ActionButton = function(props) {
  return (
    <div className='action-button'>
      {`${props.text}`}
    </div>
  )
}

export default ActionButton
