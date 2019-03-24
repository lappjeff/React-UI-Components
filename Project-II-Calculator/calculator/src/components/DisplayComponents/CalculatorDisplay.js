import React, { Component, Fragment } from 'react'
import './Display.scss'

import {MainRows, SumDisplay} from './index'

const numbers = [1,2,3,4,5,6,7,8,9]
const operators = ['+', '-', '/', '*']
export default class CalculatorDisplay extends Component {

  render() {
    return (
      <Fragment>
        <SumDisplay />
          <div className='pink'>Clear</div>
          <div className='pink'>/</div>
          <div className='pink'>7</div>
          <div className='pink'>8</div>
          <div className='pink'>9</div>
          <div className='pink'>x</div>
          <div className='pink'>4</div>
          <div className='pink'>5</div>
          <div className='pink'>6</div>
          <div className='pink'>-</div>
          <div className='pink'>1</div>
          <div className='pink'>2</div>
          <div className='pink'>3</div>
          <div className='pink'>+</div>
          <div className='pink'>0</div>
          <div className='pink'>=</div>


      </Fragment>

    )
  }
}
