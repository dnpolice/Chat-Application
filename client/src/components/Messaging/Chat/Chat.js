import React, {useContext, useState} from 'react';
import SendBar from './SendBar';
import Messages from './Messages';
import classes from './Chat.module.css';
import FriendContext from '../../../friendContext/friendContext';
import axios from 'axios'

const Chat = (props) => {
    const friendContext = useContext(FriendContext);
    const {friendEmail, friendName} = friendContext;

    const [messages, setMessages] = useState(null);
    const getMessages = async () => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try{
            const request = await axios.post('/api/messages/all', {friend: friendEmail}, config);
            setMessages(request.body.messages);
        } catch(error) {
            console.log(error.message);
        }
    }

    if(!messages) getMessages();

    if (!friendEmail) return (
     <h2 className={classes.ChatMessage}>Select a Friend to Message!</h2>
    )
    
    return(
        <div className={classes.Chat}>
            <SendBar friendEmail={friendEmail}/>
            <Messages/>
            <h3>{friendName}</h3>
        </div>
    );
};

export default Chat;