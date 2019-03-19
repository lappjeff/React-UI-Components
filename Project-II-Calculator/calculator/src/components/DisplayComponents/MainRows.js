import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton'
import NumberButton from '../ButtonComponents/NumberButton'

const numbers = [1,2,3,4,5,6,7,8,9]

const MainRows = function() {

  return (
    <div className='main-rows'>
      <ActionButton text='clear' />
      <div className='number-icons'>
        {numbers.map(function(number) {
          return <NumberButton text={number} buttonStyles='fit-width'/>
        })}
      </div>
      <ActionButton text='0' />
    </div>
  )


}


export default MainRows;
