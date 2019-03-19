import React from 'react'
import NumberButton from '../ButtonComponents/NumberButton'

const symbols = ['/', 'x', '-', '+', '=']

const SideRow = function() {
  return (
    <div className='side-row'>
      {symbols.map(function(symbol) {
        return <NumberButton buttonStyles='red-button' text={symbol} />
      })}
    </div>
  )
}

export default SideRow
