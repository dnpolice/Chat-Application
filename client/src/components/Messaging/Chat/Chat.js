import React, {useContext, useState, useEffect} from 'react';
import SendBar from './SendBar';
import Messages from './Messages';
import classes from './Chat.module.css';
import FriendContext from '../../../friendContext/friendContext';
import axios from 'axios'

const Chat = (props) => {
    const friendContext = useContext(FriendContext);
    const {friendEmail, friendName} = friendContext;

    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const [messages, setMessages] = useState(null);
    const [refreshes, setRefreshes] = useState(0);
    const [currentFriendEmail, setCurrentFriendEmail] = useState(friendEmail);

    
    const getMessages = async () => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try{
            const request = await axios.post('/api/messages/all', {friend: friendEmail}, config);
            setMessages(request.data.messages);
            setTimeout(() => {
                if (refreshes > 100) setRefreshes(0);
                else setRefreshes(refreshes +1);
            }, 10000);
        } catch(error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getMessages();
    }, [refreshes]);

    if(!messages && friendEmail) {
        getMessages();
    }

    if(currentFriendEmail !== friendEmail) {
        setCurrentFriendEmail(friendEmail);
        setMessages(null);
    }

    if (!friendEmail) return (
     <h2 className={classes.ChatMessage}>Select a Friend to Message!</h2>
    )
    
    return(
        <div className={classes.Chat}>
            <SendBar friendEmail={friendEmail} setMessages={setMessages}/>
            <Messages messages={messages} friendEmail={friendEmail} />
            <h3>{friendName}</h3>
        </div>
    );
};

export default Chat;