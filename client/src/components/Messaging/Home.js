import React from 'react';
import Navigation from './Navigation/Navigation';
import FriendsList from './Friends/FriendsList';

const home = (props) => {
    return (
        <div>
            <Navigation/>
            <FriendsList/>
        </div>
    );
};

export default home;