import React, { Component } from 'react';
import './navbar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div>Clicky Game</div>
        <div>You Guessed Correctly</div>
        <div>Score: {this.props.score}</div>
      </div>
    );
  }
}

export default NavBar;
