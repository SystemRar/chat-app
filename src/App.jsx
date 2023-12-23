import './App.css';

import MessageForm from "./components/MessageInput/MessageForm.jsx";
import ChatWindow from "./components/ChatWindow/ChatWindow.jsx";

import {useCallback, useState} from "react";

function App() {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = useCallback((sentMessage) => {
        setMessages(prevState => [...prevState, sentMessage])
    }, []);

    return (
        <div className={'wrapper'}>
            <ChatWindow messages={messages}/>
            <div className={'input-and-send-button'}>
                <MessageForm sendMessage={handleSendMessage}/>
            </div>
        </div>
    )
}

export default App
