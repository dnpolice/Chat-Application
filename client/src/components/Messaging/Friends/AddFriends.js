import React, {Component} from 'react';
import classes from './AddFriends.module.css';
import Modal from '../UI/Modal';

class AddFriends extends Component {

    state = {
        show: false,
        email: "",
    }

    closeModal = () => {
        this.setState({show: false});
    }

    showAddFriendHandler = () => {
        this.setState({show: true});
    }

    onChangeHandler = (e) => {
        this.setState({email: e.target.value});
    }

    addFriendHandler = () => {
        console.log("submitted!");
    }

    render() {
        return (
            <div className={classes.AddFriends}>
                <h3>FRIENDS</h3>
                <div className={classes.AddBtn} onClick={this.showAddFriendHandler}></div>
                {this.state.show ? 
                <Modal show={this.state.show} modalClosed={this.closeModal}>
                    <form onSubmit={this.addFriendHandler}>
                        <h3><b>ADD FRIENDS!</b></h3>
                        <h4>Want to chat with you friends on ChatApp? Add them via email and let the chatting begin!</h4>
                        <input type="text" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.onChangeHandler} required></input>
                        <br/>
                        <button type="submit" className={classes.AddFriendBtn} onSubmit={this.addFriendHandler}>ADD FRIEND</button>
                        <button className={classes.CancelBtn} onClick={this.closeModal}>CANCEL</button>
                    </form>
                </Modal> : null}
            </div> 
        );
    }
};

export default AddFriends;