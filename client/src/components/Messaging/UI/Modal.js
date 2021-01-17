import React from 'react';
import classes from './Modal.module.css';
import Backdrop from './Backdrop';

const modal = (props) => {
    return (
        <div>
            <Backdrop showBackDrop={props.show} closeBackDrop={props.modalClosed}/>
            <div 
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </div>
    );
};

export default modal;