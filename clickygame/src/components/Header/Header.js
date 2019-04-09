import React from "react";
import "./style.css";
function Header(props) {
    return (
    <h1 className="header">The Clicky Game!<br></br><span id="score"> Score: </span><span id="topScore"> Top Score: </span></h1>
        )
}

export default Header;