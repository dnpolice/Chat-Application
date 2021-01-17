import React from 'react';
import classes from './Messages.module.css';

const Messages = ({messages, friendEmail}) => {
    return (
        <div className={classes.Messages}>
            {(messages && friendEmail) ? messages.map(message => (
                message.from === friendEmail ? 
                <div className={classes.ChatMessages_left}>
                    {message.body}
                </div> :
                <div className={classes.ChatMessages_right}>
                    {message.body}
                </div>
            )) : null}
        </div>
    );
}

export default Messages;