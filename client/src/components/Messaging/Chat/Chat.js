import React, {useContext, useState, useEffect} from 'react';
import SendBar from './SendBar';
import Messages from './Messages';
import classes from './Chat.module.css';
import FriendContext from '../../../friendContext/friendContext';
import axios from 'axios'

const Chat = ({socket}) => {
    const friendContext = useContext(FriendContext);
    const {friendEmail, friendName} = friendContext;

    useEffect((() => {
        setCurrentFriendEmail(friendEmail);
        setMessages({messages: null});
    }, [friendContext])

    const [messages, setMessages] = useState({messages: null});
    const [currentFriendEmail, setCurrentFriendEmail] = useState(friendEmail);

    
    const getMessages = async () => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try{
            const request = await axios.post('/api/messages/all', {friend: friendEmail}, config);
            setMessages({messages: request.data.messages});
            setRoom(); 
        } catch(error) {
            console.log(error.message);
        }
    }

    const setRoom = async () => {
        const request = await axios.get('api/users');
        const myEmail = request.data.email;
        socket.emit('join', {
            friendEmail,
            email: myEmail
        });
    }

    if(!messages.messages && friendEmail) {
        getMessages();
    }

    if(friendEmail && currentFriendEmail !== friendEmail) {
        setCurrentFriendEmail(friendEmail);
        setMessages({messages: null});
    }

    useEffect(() => {
        try {
            socket.removeListener('message');
        } catch (error) {
            
        }
        socket.on('message', (message) => {
            if (messages.messages){
                setMessages({messages: [...messages.messages, {
                    from: message.email,
                    body: message.message
                }]});
            }
        });
    }, [messages.messages]);

    if (!friendEmail) return (
     <h2 className={classes.ChatMessage}>Select a Friend to Message!</h2>
    )
    
    return(
        <div className={classes.Chat}>
            <SendBar friendEmail={friendEmail} messages={messages} socket={socket}/>
            <Messages messages={messages.messages} friendEmail={friendEmail} />
            <h3>{friendName}</h3>
        </div>
    );
};

export default Chat;