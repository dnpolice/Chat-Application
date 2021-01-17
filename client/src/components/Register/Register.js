import React, {useState, useEffect, useContext} from 'react';
import classes from './Register.module.css';
import axios from 'axios';
import AuthContext from '../../context/authContext';

const Register = (props) => {
    const authContext = useContext(AuthContext);
    const {importUser, isAuthenticated} = authContext;

    useEffect(() => {
        if(isAuthenticated === true){
            props.history.push('/');
        }
    }, [isAuthenticated, props.history]);
    

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        pswConfirm: ""
    });
    const config = {
        headers: {
            "Content-Type": 'application/json'
        }
    }
    const onSubmit = async e => {
        e.preventDefault();
        try {
            if (password === pswConfirm){
            const result = await axios.post("/api/users", user, config);
            localStorage.setItem('token', result.data.token);
            setUser({
                name: "",
                email: "",
                password: "",
                pswConfirm: ""
            });
            await importUser();
            } else {
                alert("Passwords do not match");
                setUser({
                    name: "",
                    email: "",
                    password: "",
                    pswConfirm: ""
                });
            }
        } catch (error) {
            console.log(error.message)
            alert('Server error try again');
        }     
    }

    const onChangeHandler = e => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const {name, email, password, pswConfirm} = user;
    
    return (
        <form className={classes.Register} onSubmit={onSubmit}>
            <div className={classes.container}>
                <h1>Sign Up For A ChatApp Account!</h1>
                <br/>

                <div className={classes.inputContainer}>
                    <label><b>Name</b></label>
                    <input type="text" placeholder="Enter Name" name="name" value={name} onChange={onChangeHandler} required></input>

                    <label><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" value={email} onChange={onChangeHandler} required></input>

                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" value={password} onChange={onChangeHandler} required></input>

                    <label><b>Confirm Password</b></label>
                    <input type="password" placeholder="Confirm Password" name="pswConfirm" value={pswConfirm} onChange={onChangeHandler} required></input>
                    <br/>

                    <button type="submit" className={classes.registerBtn}>SIGN UP</button>
                </div>
            </div>

            <div className={classes.container}>
                <p>Already have an account? <a href="/signin">Sign In</a></p>
            </div> 
        </form>
    );
};

export default Register;