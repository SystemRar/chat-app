import './App.css';

import ChatWindow from "./Components/ChatWindow/ChatWindow.jsx";
import MessageInput from "./Components/MessageInput/MessageInput.jsx";
import SendButton from "./Components/SendButton/SendButton.jsx";

function App() {
    return (
        <>
            <ChatWindow/>
            <div className={'input-and-send-button'}>
                <MessageInput/>
                <SendButton/>
            </div>
        </>
    )
}

export default App
