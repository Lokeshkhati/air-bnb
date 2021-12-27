import React from "react";
import logo from "../images/air-bnb-logo.svg";

export default function Navbar(){
    return(
        <nav className="nav">
            <img className="nav-logo" src={logo}/>
        </nav>
    )
}