import React, {useContext} from 'react';
import classes from './FriendsList.module.css';
import Friend from './Friend';
import AddFriends from './AddFriends';
import FriendContext from '../../../friendContext/friendContext';

const FriendsList = (props) => {
    const friendContext = useContext(FriendContext);
    const {getAllFriends, friendsList} = friendContext;

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