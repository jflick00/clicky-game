import React, { Component } from "react";
import './header.css';

class ClickyHeader extends Component {
  render() {
    return (
      <header className="app-header">
        <h2 className="app-title">
          Clicky Game!
        </h2>
        <h1 className="app-sub-title">
          Carolina Panthers Edition
        </h1>
        Click on an image to earn points, but dont click on any image more than once.
      </header>
    );
  }
}


export default ClickyHeader;