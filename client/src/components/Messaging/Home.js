import React, {useEffect, useContext, Fragment} from 'react';
import AuthContext from '../../context/authContext';
import Navigation from './Navigation/Navigation';
// import FriendsList from './Friends/FriendsList';
// import Chat from './Chat/Chat';
import Flexrow from './Flexrow';
import classes from './Home.module.css';

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
        <Fragment className={classes.Home}>
            <Navigation/>
            <Flexrow/>
        </Fragment>
    );
};

export default Home;
