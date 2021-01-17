import React from 'react';
import classes from './Friend.module.css';

const friend = (props) => {
    let style = classes.Friend;

    const openFriendHandler = () => {

    }    

    return (
        <div className={style} onClick={openFriendHandler}><b>Test name</b></div>
    );
};

export default friend;