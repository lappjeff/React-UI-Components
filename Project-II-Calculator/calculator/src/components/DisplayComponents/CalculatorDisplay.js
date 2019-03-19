import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton'
import ActionButton from '../ButtonComponents/ActionButton'

const numbers = [1,2,3,4,5,6,7,8,9]

const CalculatorDisplay = function() {
  return (
    <div className='container'>
      <div className='display'>
        <h1>0</h1>
      </div>
      <div className='main'>
        <div className='side-row'>
          <NumberButton buttonStyles='red-button' text='/'/>
          <NumberButton buttonStyles='red-button' text='x'/>
          <NumberButton buttonStyles='red-button' text='-'/>
          <NumberButton buttonStyles='red-button' text='+'/>
          <NumberButton buttonStyles='red-button' text='='/>
        </div>
        <div className='number-icons'>
            {numbers.map(function(number) {
              return <NumberButton text={number} />
            })}
        </div>
      </div>
    </div>
  )
}


export default CalculatorDisplay
