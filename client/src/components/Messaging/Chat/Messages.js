import React from 'react';
import classes from './Messages.module.css';

const Messages = ({messages, friendEmail}) => {
    let count = 0;
    return (
        <div className={classes.Messages}>
            {(messages && friendEmail) ? messages.map(message => (
                message.from === friendEmail ? 
                <div key={count++} className={classes.ChatMessages_left}>
                    {message.body}
                </div> :
                <div key={count++} className={classes.ChatMessages_right}>
                    {message.body}
                </div>
            )) : null}
        </div>
    );
}

export default Messages;