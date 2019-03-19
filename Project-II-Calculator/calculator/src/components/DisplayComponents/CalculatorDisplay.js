import React from 'react';
import './Display.css';
import MainRows from './MainRows'
import SideRow from './SideRows'
import SumDisplay from './SumDisplay'


const CalculatorDisplay = function() {
  return (
    <div className='container'>
      <SumDisplay />
      <main className='main'>
        <MainRows />
        <SideRow />
      </main>
    </div>
  )
}

export default CalculatorDisplay
