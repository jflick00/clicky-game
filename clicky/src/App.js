import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
// import Counter from "./components/Counter";
import Header from "./components/Header";
import Card from "./components/Card";
// import Footer from "./components/Footer";
import images from "./images.json";
// import './App.css';

class App extends Component {

  state = {
    images
  };

  shuffleImages = id => {
    const images = this.state.images.sort(function(a, b){return 0.5 - Math.random()});
    this.setState({ images });
  };


  render() {
    return (
      <Wrapper>
      <NavBar />
      <Header>Clicky Game</Header>
      {this.state.images.map(image => (
      <Card 
      id={image.id}
      key={image.id}
      image={image.image}
      />
      ))}
      {/* <Footer /> */}
      </Wrapper>
    );
  }
}

export default App;
