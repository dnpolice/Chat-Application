import React from 'react';
import SendBar from './SendBar';
import classes from './Chat.module.css';

const chat = (props) => {
    return(
        <div className={classes.Chat}>
            <SendBar/>
        </div>
    );
};

export default chat;