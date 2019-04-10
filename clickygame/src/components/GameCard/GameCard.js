import React from "react";
import "./style.css";

function GameCard(props) {
    return (
       
        <div className="card"  >
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className= "content">
            <strong>{props.name}</strong></div>
                </div>
               
    )
}

export default GameCard;