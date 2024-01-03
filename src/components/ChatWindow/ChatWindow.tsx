import React, { memo } from 'react';
// @ts-ignore
import { chat_window, message } from './ChatWindow.module.css';

interface ChatWindowProps {
  messages: Array<string>;
}

function ChatWindow({ messages }: ChatWindowProps) {
  const messagesHistory = messages.map((sentMessage: string, index: number) => (
    <p key={index} className={`${message}`}>{sentMessage}</p>
  ));

  return (
    <div className={chat_window}>
      {messagesHistory}
    </div>
  );
}

export default memo(ChatWindow);
