import React from 'react';
import classes from './Friend.module.css';

const friend = ({name, email}) => {
    let style = classes.Friend;

    const openFriendHandler = () => {

    }    

    return (
        <div className={style} onClick={openFriendHandler}><b>{name}</b></div>
    );
};

export default friend;