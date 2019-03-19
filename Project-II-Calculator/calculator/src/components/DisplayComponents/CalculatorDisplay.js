import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton'
import ActionButton from '../ButtonComponents/ActionButton'

const numbers = [1,2,3,4,5,6,7,8,9]
const symbols = ['/', 'x', '-', '+', '=']

const CalculatorDisplay = function() {
  return (
    <div className='container'>

      <div className='display'>
        <h1>0</h1>
      </div>

      <div className='main'>
        <div className='main-rows'>
          <ActionButton text='clear' />
          <div className='number-icons'>
            {numbers.map(function(number) {
              return <NumberButton text={number} buttonStyles='fit-width'/>
            })}
          </div>
          <ActionButton text='0' />
        </div>
        <div className='side-row'>
          {symbols.map(function(symbol) {
            return <NumberButton buttonStyles='red-button' text={symbol} />
          })}
        </div>
      </div>
    </div>
  )
}

export default CalculatorDisplay
