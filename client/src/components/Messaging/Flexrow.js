import React, { Fragment } from 'react';
import FriendsList from './Friends/FriendsList';
import Chat from './Chat/Chat';
import classes from './Flexrow.module.css';

const flexrow = (props) => {
    return (
        <div className={classes.Flexrow}>
            <FriendsList/>
            <Chat/>
        </div>
    );
}

export default flexrow;