import React from 'react';
import classes from './Navigation.module.css';

const navigation = (props) => {
    const logoutHandler = () => {
        localStorage.removeItem('token');
    }

    return (
        <div className={classes.Navigation}>
            <h1>ChatApp</h1>
            <a href='/signin' onClick={logoutHandler}><b>LOGOUT</b></a>
        </div>
    );
};

export default navigation;