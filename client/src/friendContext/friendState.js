import React, {useReducer} from 'react';
import FriendContext from './friendContext';
import friendReducer from './friendReducer';
import axios from 'axios';

const FriendState = props => {
    const initalState = {
        friendsList: null
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

    return (
        <FriendContext.Provider
            value={{
                friendsList: state.friendsList,
                getAllFriends
            }}>
                {props.children}
            </FriendContext.Provider>
    )
}

export default FriendState;