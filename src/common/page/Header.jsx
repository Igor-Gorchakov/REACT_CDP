import React from "react";
import "./header.css"

function Header(props) {
    return (
        <div className="header">
            <div className="caption">{props.headerCaption}</div>
            <legend/>
        </div>
    );
}


export default Header;