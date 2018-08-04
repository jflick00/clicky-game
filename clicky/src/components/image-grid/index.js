import React, { Component } from 'react';
import './image-grid.css';
import ImageBox from '../image-box';

class ImageGrid extends Component {
    render() {
        var imageBoxArr = [];
        for (let i=0; i<4; i++) {
            imageBoxArr.push(<ImageBox addScore={this.props.addScore}/>);
        }
        console.log('image-grid', this.props)
        return (
            <div className="images">
                <div className="image-row">
                    {imageBoxArr}
                </div>
                <div className="image-row">
                    {imageBoxArr}
                </div>
                <div className="image-row">
                    {imageBoxArr}
                </div>
            </div>
        );
    }
}

export default ImageGrid;