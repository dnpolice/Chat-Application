import React, {useState} from 'react';
import classes from './SignIn.module.css';
import axios from 'axios';
//Change to login page currently is signup page
//The object being sent should look like : {
//     email: email,
//     password: password
// } when being sent to backend
const SignIn = (props) => {
    
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const config = {
        headers: {
            "Content-Type": 'application/json'
        }
    }
    
    const onSubmit = async e => {
        e.preventDefault();
        try {
            const result = await axios.post("/api/auth", user, config);
            console.log(result.data.token)
            localStorage.setItem('token', result.data.token);
        } catch (error) {
            console.log(error.message)
        }
        
    }

    const onChangeHandler = e => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const {email, password} = user;

    return (
        <form onSubmit={onSubmit}>
            <div className={classes.container}>
                <h1>Sign In</h1>
                <br/>

                <div className={classes.inputContainer}>
                    <label><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" value={email} onChange={onChangeHandler} required></input>

                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" value={password} onChange={onChangeHandler} required></input>
                    <br/>

                    <button type="submit" className={classes.signInBtn}>SIGN IN</button>
                </div>
            </div>

            <div className={classes.container}>
                <p>Don't have an account? <a href="/signup">Sign Up</a></p>
            </div> 
        </form>
    );
};

export default SignIn;