import React from "react";

class Counter extends React.Component {

  // Setting the initial state of the Counter component
  state = {
    count: 0
  };

  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
}

export default Counter;