import React, {useState, useEffect} from 'react';
import classes from './FriendsList.module.css';
import Friend from './Friend';
import AddFriends from './AddFriends';
import axios from 'axios';

const FriendsList = (props) => {
    const [friends, setFriends] = useState(null);
    const getAllFriends = async () => {
        try {
            const result = await axios.get('/api/friends');
            const friendsList = result.data.friends_list;
            setFriends(friendsList);
        } catch (error) {
            console.log(error.message);
        }
    }
    if(!friends) getAllFriends();

    return (
        <div className={classes.FriendsList}>
            <AddFriends/>
            {friends ? friends.map(friend => (
                <Friend key={friend.email} name={friend.name} email={friend.email}/>
            )) : null}
        </div>
    );
};

export default FriendsList;