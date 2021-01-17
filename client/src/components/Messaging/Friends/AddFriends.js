import React, {useState, useContext} from 'react';
import classes from './AddFriends.module.css';
import Modal from '../UI/Modal';
import axios from 'axios';
import FriendContext from '../../../friendContext/friendContext';

const AddFriends = (props) => {
    const friendContext = useContext(FriendContext);
    const {getAllFriends} = friendContext;
    
    const [state, setState] = useState({
        show: false,
        email: "",
    });

    const addFriendHandler = async e => { 
        e.preventDefault();
        const config = {
            headers: {
                "Content-Type": 'application/json'
            }
        }
        try {
            await axios.post('/api/friends', {friend: state.email }, config);
            getAllFriends();
            closeModal();
            setState({
                show: false,
                email: "",
            });
        } catch (error) {
            console.log(error.message);
            alert('Not an Valid User');
        }
    }
    

    const closeModal = () => {
        setState({...state, show: false});
    }

    const showAddFriendHandler = () => {
        setState({...state, show: true});
    }

    const onChangeHandler = (e) => {
        setState({...state, email: e.target.value});
    }

    return (
        <div className={classes.AddFriends}>
            <h3 className={classes.FriendsText}>FRIENDS</h3>
            <div className={classes.AddBtn} onClick={showAddFriendHandler}></div>
            {state.show ? 
            <Modal show={state.show} modalClosed={closeModal}>
                <form onSubmit={addFriendHandler}>
                    <h3><b>ADD FRIENDS!</b></h3>
                    <h4>Want to chat with you friends on ChatApp? Add them via email and let the chatting begin!</h4>
                    <input type="email" placeholder="Enter Email" name="email" value={state.email} onChange={onChangeHandler} required></input>
                    <br/>
                    <button type="submit" className={classes.AddFriendBtn} onSubmit={addFriendHandler}>ADD FRIEND</button>
                    <button className={classes.CancelBtn} onClick={closeModal}>CANCEL</button>
                </form>
            </Modal> : null}
        </div> 
    );
};

export default AddFriends;