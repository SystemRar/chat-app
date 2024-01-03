import { useCallback, useEffect, useState } from 'react';
// @ts-ignore
import { input_and_send_button, wrapper } from './App.module.css';

import ChatWindow from './components/ChatWindow/ChatWindow';
import MessageForm from './components/MessageForm/MessageForm';

function App() {
  const [messages, setMessages] = useState<string[]>(() => {
    const storedMessages = localStorage.getItem('messagesHistory');
    return storedMessages ? JSON.parse(storedMessages) : [];
  });

  useEffect(() => {
    localStorage.setItem('messagesHistory', JSON.stringify(messages));
  }, [messages]);

  localStorage.removeItem('messages');

  const handleSendMessage = useCallback((message: string) => {
    message.trim();
    setMessages((prevState: Array<string>) => [...prevState, message]);
  }, []);

  const handleDeleteMessageHistory = useCallback(() => {
    setMessages([]);
  }, []);

  return (
    <div className={wrapper}>
      <ChatWindow messages={messages} />
      <div className={input_and_send_button}>
        <MessageForm onSendMessage={handleSendMessage} deleteMessages={handleDeleteMessageHistory} />
      </div>
    </div>
  );
}

export default App;
