import React, {Component} from 'react';
import classes from './AddFriends.module.css';
import Modal from '../UI/Modal';

class AddFriends extends Component {

    state = {
        show: false,
    }

    closeModel = () => {
        this.setState({show: false});
    }

    addFriendsHandler = () => {
        this.setState({show: true});
    }

    render() {
        return (
            <div className={classes.AddFriends}>
                <h3>FRIENDS</h3>
                <div className={classes.AddBtn} onClick={this.addFriendsHandler}></div>
                {this.state.show ? <Modal show={this.state.show} modelClosed={this.state.closeModel}>ADD FRIENDS</Modal> : null}
            </div> 
        );
    }
    
    
};

export default AddFriends;