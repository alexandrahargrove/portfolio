import React from "react";
import './style/navbar.css';


const NavBar = () => {
    return (
    <div id="navigation">
        <div id="nav-links">
            <a href="#about">About</a> | <a href="#project-container">Projects</a> | Skills | Contact
        </div>
        <div id="social">
        <a href="https://www.linkedin.com/in/alexandrahargrove/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/nolan/50/linkedin.png"/></a>

        <a href="https://www.github.com/alexandrahargrove/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/nolan/50/github.png"/></a>

        <a href="https://www.instagram.com/webdevlady/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/nolan/50/instagram-new.png"/></a>

        <img id="logo" src="/alexandra-logo.png"></img>
        </div>
        <div><a href="#about">About</a></div>
    </div>
    )
};

export default NavBar;