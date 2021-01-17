import React, {useState, useEffect, useContext, Fragment} from 'react';
import axios from 'axios';
import AuthContext from '../../context/authContext';
import Navigation from './Navigation/Navigation';
import FriendsList from './Friends/FriendsList';

const Home = (props) => {
    const authContext = useContext(AuthContext);
    const {importUser, isAuthenticated} = authContext;
    useEffect(() => {
        importUser();
    }, []);

    if (!isAuthenticated) {
        return <Fragment></Fragment>
    }

    return (
        <div>
            <Navigation/>
            <FriendsList/>
        </div>
    );
};

export default Home;
