import React, {useEffect, useContext, Fragment, useState} from 'react';
import AuthContext from '../../context/authContext';
import Navigation from './Navigation/Navigation';
// import FriendsList from './Friends/FriendsList';
// import Chat from './Chat/Chat';
import Flexrow from './Flexrow';
import classes from './Home.module.css';
import io from 'socket.io-client';
let socket;
const Home = (props) => {
    const authContext = useContext(AuthContext);
    const {importUser, isAuthenticated} = authContext;

    useEffect(() => {
        importUser();
        socket = io(`https://chatappproj.herokuapp.com:${proccess.env.PORT}/`,  { transports: ['websocket', 'polling', 'flashsocket'] });
    }, []);

    if (!isAuthenticated) {
        return <Fragment></Fragment>
    }

    return (
        <Fragment className={classes.Home}>
            <Navigation/>
            <Flexrow socket={socket}/>
        </Fragment>
    );
};

export default Home;
