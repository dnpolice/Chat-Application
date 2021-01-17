import React from 'react';
import classes from './FriendsList.module.css';
import Friend from './Friend';
import AddFriends from './AddFriends';

const friendsList = (props) => {
    return (
        <div className={classes.FriendsList}>
            <AddFriends/>
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
        </div>
    );
};

export default friendsList;