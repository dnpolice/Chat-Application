import React, { Component } from 'react';
import classes from './Modal.module.css';

class Modal extends Component {

    render() {
        return (
            <div>
                <div 
                    className={`${classes.Modal} ${classes.AddBtn}` }
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </div>
        );
    }
};

export default Modal;