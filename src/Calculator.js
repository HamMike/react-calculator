import React, { Component } from 'react';

class Calculator extends Component {

  constructor(props) {
    super()
    this.state = {
      number1: 0,
      number2: 0,
      sum: 0
    }
    this.handleChange1 = this.handleChange1.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
  }

  handleChange1(e) {
      this.setState ({
        number1: parseInt(e.target.value)
      })
    }
  handleChange2(e) {
      this.setState ({
        number2: parseInt(e.target.value)
      })
    }

  sum(x, y) {
    this.setState( {
      sum: x + y
    })
  }

  subtract(x, y) {
    this.setState( {
      sum: x - y
    })
  }

  multiply(x, y) {
    this.setState( {
      sum: x * y
    })
  }

  divide(x, y) {
    this.setState( {
      sum: x / y
    })
  }



  render() {

    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
        <input type="text" value={ this.state.value} onChange={ this.handleChange1 }/>
          <span>+</span>
          <input type="text" value={ this.state.value } onChange={ this.handleChange2 }/>
          <span>=</span>
          <button onClick={ (event) => this.sum(this.state.number1, this.state.number2) }>Sum</button>
          <button onClick={ (event) => this.subtract(this.state.number1, this.state.number2) }>subtract</button>
          <button onClick={ (event) => this.multiply(this.state.number1, this.state.number2) }>mutliply</button>
          <button onClick={ (event) => this.divide(this.state.number1, this.state.number2) }>divide</button>
          <h3>{ this.state.sum }</h3>
        </div>
      </div>
    )

  }
}

export default Calculator
