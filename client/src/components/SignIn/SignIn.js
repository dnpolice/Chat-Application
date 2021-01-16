import React from 'react';
import classes from './SignIn.module.css';

const signIn = (props) => {
    return (
        <form>
            <div className={classes.container}>
                <h1>Sign In</h1>
                <br/>

                <div className={classes.inputContainer}>
                    <label><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required></input>

                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required></input>
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

export default signIn;