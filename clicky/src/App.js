import React, { Component } from 'react';
import './App.css';
import ImageBox from './components/image-box';
import ClickyHeader from './components/header';
import NavBar from './components/nav-bar';
import images from './images.json'

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};


class App extends Component {
  
  state = {
    images,
    score: 0
  }

  // When user clicks on image pass in image object
  handleClick = image => {
    
    //If there is one unguessed image left and the user clicks on the correct one, run this function
    if (image.guessed === false && this.state.score === 11) {
        
        //Reset each images guessed value to false
        this.state.images.map(image => {
          return image.guessed = false
        })

        //Reset state
        this.setState({
          images: images,
          score: 0
        })

        alert("You Win!");
    } 
      
    //If the clicked image's guessed value is false, run this function
    else if (image.guessed === false) {

      var imageArr =[]
      var clickedImage = image.id
      var score = this.state.score

      
      //Map array and push to new array
      this.state.images.map(image => {
        return imageArr.push(image);
      })

      //Run through new array, find clicked image and set its guessed value to true
      for (let i=0; i < imageArr.length; i++) {
        if (imageArr[i].id === clickedImage) {
          imageArr[i].guessed = true;
        }
      }
      
      //Update state
      this.setState({
        score: score += 1,
        images: shuffle(imageArr)
      })

    } 
    
    //If image has already been clicked, run this function
    else {

      //Reset each images guessed value to false
      this.state.images.map(image => {
        return image.guessed = false
      })

      //Reset state
      this.setState({
        images: images,
        score: 0
      })

      alert("You lose!")
    }
  }
    
  render() {
    return (
      
      <div className="App">

        <NavBar 
        score={this.state.score}
        />

        <ClickyHeader/>
        
        <div className="images">
          {this.state.images.map(image => (
            <ImageBox 
              id={image.id}
              image={image.image}
              guessed={image.guessed}
              handleClick={this.handleClick}
            />
          ))}
        </div>

      </div>
    );
  }
}

export default App;