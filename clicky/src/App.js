import React, { Component } from 'react';
// import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import ClickyHeader from "./components/clickyHeader";
import ImageGrid from "./components/image-grid";
// import Footer from "./components/Footer";
import images from "./images.json";
// import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      topScore: 0,
      guessedCorrectly: null,
      alreadyGuessed: null,
      images: [],
    }
    for(let i=0; this.state.images.length < 13; i++) {
      this.state.images.push(i);
    }
  }

  shuffleImages = id => {
    const images = this.state.images.sort(function(a, b){return 0.5 - Math.random()});
    this.setState({ images });
  };

  addScore = () => {
    console.log(this.state);
    this.setState ({
      score: this.state.score + 1
    })
  }


  render() {
    return (
      <div className="App">
      <NavBar />
      <ClickyHeader />
      <ImageGrid imageOrder={this.state.images} addScore={this.addScore}/>
      {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
