// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  random = () => {
    const randomNumber = Math.random() * 100
    const roundNumber = Math.ceil(randomNumber)
    this.setState(prevState => ({count: prevState.count + roundNumber}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="count-heading">Count {count}</h1>
        <p className="count-status">
          Count is {count % 2 === 0 ? 'Even' : 'Odd'}
        </p>
        <button onClick={this.random} className="button" type="button">
          Increment
        </button>
        <p>*Increase By Random Number between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
