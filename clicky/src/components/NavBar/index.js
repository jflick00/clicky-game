import React, { Component } from "react";
import './nav-bar.css';

class NavBar extends Component {
  render() {
    return (
      <div className='nav-bar'>
          <a href="#!">Clicky Game</a>
          <div>You Guessed Correctly</div>
          <div>Score: {this.props.addScore} | Top Score: 0</div>
      </div>
    );
  }
}

export default NavBar;