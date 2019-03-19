import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton'


const CalculatorDisplay = function() {
  return (
    <div className='container'>
      <div className='display'>
        <h1>0</h1>
      </div>
      <NumberButton buttonStyle='red' text='1'/>
    </div>
  )
}

export default CalculatorDisplay
