import React, { Component } from 'react';
import classes from './Modal.module.css';
// import Backdrop from './Backdrop';

class Modal extends Component {

    render() {
        return (
            <div>
                {/* <Backdrop showBackDrop={this.props.show} closeBackDrop={this.props.modalClosed}/> */}
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