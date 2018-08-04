import React, { Component } from 'react';
import './image-box.css';
import '../../images.json';

class ImageBox extends Component {
    render() {
        console.log('image-box', this.props)
        return  (
            <div className="image-box" onClick={this.props.addScore}>
                  {/* <img src={props.image} /> */}
            </div>
        );
    }
}

export default ImageBox;