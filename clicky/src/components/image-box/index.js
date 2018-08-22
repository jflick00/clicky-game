import React from 'react';
import './image-box.css';

const ImageBox = props => (
    <img alt={props.name} src={props.image} onClick={() => props.handleClick(props)}/>
);

export default ImageBox;