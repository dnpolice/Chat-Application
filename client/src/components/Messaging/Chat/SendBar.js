import React from 'react';
import classes from './SendBar.module.css';

const sendBar = (props) => {
    return (
        <div className={classes.SendBar}>
            <input type="text" name="message" placeholder="Write Your Message"></input>
            <button type="submit" name="send" className={classes.SendBtn}>SEND</button>
        </div>
    );
}

export default sendBar;