import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component { 
  
  state = {
    count: 0 };

  handleAddOne = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
    }
  
  handleMinusOne = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
    }

  handleReset = () => {
    this.setState(() => {
      return {
        count: 0
      };
    });
    }
  render() {


    return (
        <div>
          <h1>Count:{this.state.count}</h1>  
          <button onClick={this.handleAddOne}>+1</button>
          <button onClick={this.handleMinusOne}>-1</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      );
    };
  }

  ReactDOM.render(
    <Counter />,
  document.querySelector('#root')
);
