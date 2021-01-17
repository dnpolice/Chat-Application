import React from 'react';
import classes from './Navigation.module.css';

const navigation = (props) => {
    return (
        <div className={classes.Navigation}>
            <h1>ChatApp</h1>
            <a href='#'><b>LOGOUT</b></a>
        </div>
    );
};

export default navigation;