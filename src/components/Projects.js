import React from 'react';
import './style/projects.css';

const Projects = () => {
    return (
        <div id="project-container">
            <div class="project">
                <h2 id="project-title">ECOMMERCE MUSIC SHOP</h2>
                <a href="http://beta-bots-shop.herokuapp.com/" target="_blank">
                <img id="beta-bots" src="/beta-bots.png"></img>
                </a>
                <p>Contributing Developer</p>
                <p>Fully functional eCommerce platform selling musical instruments.</p>
            </div>
            <div class="project">
                <h2 id="project-title">STRANGER'S THINGS</h2>
                <a href="https://alexandra-strangers-things.netlify.app/home" target="_blank">
                <img id="strangers-things" src="/strangers-things.png"></img>
                </a>
                <p>Craigslist-like website where uses can buy and sell items</p>
            </div>
            <div class="project">
                <h2 id="project-title">SNAKE ARCADE GAME</h2>
                <a href="https://snake-game-alexandra.netlify.app/" target="_blank">
                <img id="snake" src="/snake.png"></img>
                </a>
                <p>Contributing Developer</p>
                <p>Fully functional eCommerce platform selling musical instruments.</p>
            </div>
        </div>
    )
}

export default Projects;