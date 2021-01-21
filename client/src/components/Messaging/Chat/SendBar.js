import React, {useEffect, useState} from 'react';
import classes from './SendBar.module.css';
import axios from 'axios';

const SendBar = ({messages, friendEmail, socket}) => {
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
        const request = await axios.get('api/users');
        const myEmail = request.data.email;
        socket.emit('message', {
            friendEmail,
            email: myEmail,
            message
        });
        setMessage("");
        await axios.post('/api/messages', {friend: friendEmail, message_body: message}, config);
        } catch(error) {
            alert('Message failed to send')
            console.log(error.message);
        }
    }
    
    return (
        <form className={classes.SendBar} onSubmit={sendMessage}>
            <input type="text" name="message" value={message} onChange={onChange} maxLength="300" placeholder="Write Your Message"></input>
            <button type="submit" name="send" className={classes.SendBtn}>SEND</button>
        </form>
    );
}

export default SendBar;