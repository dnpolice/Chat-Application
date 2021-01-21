import React, {useContext} from 'react';
import classes from './Friend.module.css';
import FriendContext from '../../../friendContext/friendContext';

const Friend = ({name, email}) => {
    let style = classes.Friend;
    const friendContext = useContext(FriendContext);
    const {setFriendEmail} = friendContext;
    const openFriendHandler = () => {
        setFriendEmail(email, name);
        console.log(email);
    }    

    return (
        <div className={style} onClick={openFriendHandler}><b>{name}</b></div>
    );
};

export default Friend;