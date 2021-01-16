import React from 'react';
import classes from './Register.module.css';

const register = (props) => {
    return (
        <form>
            <div className={classes.container}>
                <h1>Sign Up For A ChatApp Account!</h1>
                <br/>

                <div className={classes.inputContainer}>
                    <label><b>Name</b></label>
                    <input type="text" placeholder="Enter Name" name="name" required></input>

                    <label><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required></input>

                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required></input>

                    <label><b>Confirm Password</b></label>
                    <input type="password" placeholder="Confirm Password" name="psw-confirm" required></input>
                    <br/>

                    <button type="submit" className={classes.registerBtn}>SIGN UP</button>
                </div>
            </div>

            <div className={classes.container}>
                <p>Already have an account? <a href="/signin">Sign in</a></p>
            </div> 
        </form>
    );
};

export default register;