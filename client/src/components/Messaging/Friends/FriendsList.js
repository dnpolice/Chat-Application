import React, {useState, useEffect, useContext} from 'react';
import classes from './FriendsList.module.css';
import Friend from './Friend';
import AddFriends from './AddFriends';
import axios from 'axios';
import FriendContext from '../../../friendContext/friendContext';

const FriendsList = (props) => {
    const friendContext = useContext(FriendContext);
    const {getAllFriends, friendsList} = friendContext;
    useEffect(() => {

    }, [friendsList])

    if(!friendsList) getAllFriends();

    return (
        <div className={classes.FriendsList}>
            <AddFriends/>
            {friendsList ? friendsList.map(friend => (
                <Friend key={friend.email} name={friend.name} email={friend.email}/>
            )) : null}
        </div>
    );
};

export default FriendsList;