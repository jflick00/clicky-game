import React from "react";

{/* <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Clicky Game!</h1>
    <p className="lead">Click on an image to earn points, but don't click on an image more than once!</p>
  </div>
</div> */}

const Header = props => <h1 className="header">{props.children}</h1>;
export default Header;