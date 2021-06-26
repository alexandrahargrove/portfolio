import React from 'react';
import './style/contact.css'

const Contact = () => {
    return (
        <div id="contact">
            <img id="palm-trees" alt="clip art palm trees" src="/palm-trees.png"></img>
            <form action="https://formsubmit.co/de10027575b00e302899c4ba7a187207" method="POST">
                <input type="text" placeholder="Name" id="name" name="name"></input>
                <br />
                <input type="email" placeholder="Email" id="email" name="email"></input>
                <br />
                <input type="text" placeholder="Message" id="message" name="message"></input>
                <br />
                <input type="submit" value="submit"></input>
            </form>
        </div>
    )
}

export default Contact;