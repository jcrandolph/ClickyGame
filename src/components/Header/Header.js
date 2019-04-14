import React from "react";
import "./style.css";
function Header(props) {
    return (
    <h1 className="header">The Clicky Game!<br></br><span id="score" className="score"> Score: {props.score} </span>
    <span id="topScore" className="topScore"> Top Score: {props.topScore} </span></h1>
        )
}

export default Header;