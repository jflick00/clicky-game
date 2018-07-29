import React from "react";
import "./Card.css"

const Card = props => (
    <div className="card">
        {/* <div className="card"> */}
            <img className="image" alt={props.name} src={props.image} />
        {/* </div> */}

        <span onClick={() => props.shuffleImages(props.id)} className="shuffle">
        </span>
    </div>
);

export default Card;
