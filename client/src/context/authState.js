import React, {useReducer} from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

const AuthState = props => {
    const initalState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        user: null,
        loading: true
    }

    const [state, dispatch] = useReducer(authReducer, initalState);

    const importUser = async () => {
        if (localStorage.getItem('token')){
            setAuthToken(localStorage.getItem('token'));
        }

        try {
            const res = await axios.get('/api/auth');

            dispatch({type: "USER_LOADED", payload: res.data})
        } catch (err){
            dispatch({type: "USER_FAIL"})
        }
        console.log(state.isAuthenticated);
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                importUser
            }}>
                {props.children}
            </AuthContext.Provider>
    )
}

export default AuthState;