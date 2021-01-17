import React, {useEffect, useContext, Fragment} from 'react';
import AuthContext from '../../context/authContext';
import Navigation from './Navigation/Navigation';
import FriendsList from './Friends/FriendsList';
import Chat from './Chat/Chat';

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
            <Chat/>
        </div>
    );
};

export default Home;
