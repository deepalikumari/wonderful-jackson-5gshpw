import React, { useState } from "react";
import "./styles.css";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  handleInc = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    let handleDec = () => {
      if (this.state.count > 0) {
        this.setState({ count: this.state.count - 1 });
      }
    };
    let Reset = () => {
      this.setState({ count: (this.state.count = 0) });
    };

    return (
      <>
        <h1>COUNTER APP</h1>
        <h1>{this.state.count}</h1>

        <div>
          <button onClick={this.handleInc}>+</button>
          <button onClick={handleDec}>-</button>
          <button onClick={Reset}>Reset</button>
        </div>
      </>
    );
  }
}

export default Counter;
