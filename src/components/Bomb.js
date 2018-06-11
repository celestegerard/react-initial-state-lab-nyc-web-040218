import React, { Component } from 'react';

class Bomb extends Component {
  constructor(props) {
    super(props);
    console.log(props.initialCount);
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    return(
      <div>
      {this.state.secondsLeft === 0 ? 'Boom!' : '120 seconds left before I go boom!'}
      </div>
    )
  }
}

export default Bomb;
