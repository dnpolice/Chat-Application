import React, { Fragment } from 'react';
import FriendsList from './Friends/FriendsList';
import Chat from './Chat/Chat';
import classes from './Flexrow.module.css';

const flexrow = (props) => {
    return (
        <Fragment className={classes.Flexrow}>
            <FriendsList className={classes.Left}/>
            <Chat className={classes.Right}/>
        </Fragment>
    );
}

export default flexrow;