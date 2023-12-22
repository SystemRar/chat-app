import './App.css';
import MessageInput from "./Components/MessageInput/MessageInput.jsx";
import SendButton from "./Components/SendButton/SendButton.jsx";
import {useState} from "react";
import ChatWindow from "./Components/ChatWindow/ChatWindow.jsx";

function App() {
    const [message, setMessage] = useState('');
    const [allMessages, setAllMessages] = useState([]);

    function handleMessageChange(messageInputValue) {
        setMessage(messageInputValue);
    }

    function handleSendMessage(sentMessage) {
        setAllMessages(prevState => [...prevState, sentMessage]);
    }

    return (
        <div className={'wrapper'}>
            <ChatWindow allMessages={allMessages}/>
            <div className={'input-and-send-button'}>
                <MessageInput handleMessageChange={handleMessageChange}/>
                <SendButton handleSendMessages={handleSendMessage} message={message}/>
            </div>
        </div>
    )
}

export default App
