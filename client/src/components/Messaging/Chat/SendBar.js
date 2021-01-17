import React, {useState} from 'react';
import classes from './SendBar.module.css';
import axios from 'axios';

const SendBar = ({friendEmail}) => {
    const [message, setMessage] = useState("");
    const onChange = e => {
        setMessage(e.target.value);
    }
    const sendMessage = async e => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try{
        const request = await axios.post('/api/messages', {friend: friendEmail,
            message_body: message}, config);
        setMessage("");
        } catch(error) {
            console.log(error.message);
        }
    }
    
    return (
        <form className={classes.SendBar} onSubmit={sendMessage}>
            <input type="text" name="message" value={message} onChange={onChange} placeholder="Write Your Message"></input>
            <button type="submit" name="send" className={classes.SendBtn}>SEND</button>
        </form>
    );
}

export default SendBar;