import React, {useReducer} from 'react';
import FriendContext from './friendContext';
import friendReducer from './friendReducer';
import axios from 'axios';

const FriendState = props => {
    const initalState = {
        friendsList: null,
        friendEmail: null,
        friendName: null
    }

    const [state, dispatch] = useReducer(friendReducer, initalState);

    const getAllFriends = async () => {
        try {
            const result = await axios.get('/api/friends');
            const friendsList = result.data.friends_list;
            dispatch({type: "FriendList_Loaded", payload: friendsList})
        } catch (error) {
            console.log(error.message);
        }
    }
    
    const setFriendEmail = (email, name) => {
        dispatch({type:'SET_FRIEND', payload: {email, name}});
        console.log(email);
    }

    return (
        <FriendContext.Provider
            value={{
                friendsList: state.friendsList,
                friendEmail: state.friendEmail,
                friendName: state.friendName,
                setFriendEmail,
                getAllFriends
            }}>
                {props.children}
            </FriendContext.Provider>
    )
}

export default FriendState;