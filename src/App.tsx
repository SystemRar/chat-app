import './App.css';

import { useCallback, useEffect, useState } from 'react';

import ChatWindow from './components/ChatWindow/ChatWindow.js';
import MessageForm from './components/MessageForm/MessageForm.js';

function App() {
  const [messages, setMessages] = useState(() => {
    const storedMessages = localStorage.getItem('messagesHistory');
    return storedMessages ? JSON.parse(storedMessages) : [];
  });

  useEffect(() => {
    localStorage.setItem('messagesHistory', JSON.stringify(messages));
  }, [messages]);

  localStorage.removeItem('messages');

  const handleSendMessage = useCallback((message) => {
    message.trim();
    setMessages((prevState) => [...prevState, message]);
  }, []);

  const handleDeleteMessageHistory = useCallback(() => {
    setMessages([]);
  }, []);

  return (
    <div className="wrapper">
      <ChatWindow messages={messages} />
      <div className="input-and-send-button">
        <MessageForm sendMessage={handleSendMessage} deleteMessages={handleDeleteMessageHistory} />
      </div>
    </div>
  );
}

export default App;
