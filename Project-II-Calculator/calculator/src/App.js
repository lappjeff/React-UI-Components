import React, {Component} from 'react'
import './App.scss'

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
export default class App extends Component {
  state = {
    sum: 0
  }

  render() {
    return (
      <div className='app-container'>
        <CalculatorDisplay />
      </div>
    )
  }
}
