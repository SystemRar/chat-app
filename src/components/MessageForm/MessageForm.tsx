import './MessageForm.css';
import React, { memo, useRef } from 'react';

import DeleteMessageHistoryButton from '../DeleteMessageHistoryButton/DeleteMessageHistoryButton.js';
import SendButton from '../SendButton/SendButton';

interface MessageFormProps {
  onSendMessage: (message: string) => void;
  deleteMessages: () => void;
}

const MessageForm = memo(({ onSendMessage, deleteMessages }: MessageFormProps) => {
  const message = useRef('');
  const formRef = useRef<HTMLFormElement>(null);

  function onHandleChange(event: React.ChangeEvent) {
    const target = event.target as HTMLInputElement;
    message.current = target.value;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const isMessageEmpty = message.current.trim() === '';

    if (!isMessageEmpty) {
      onSendMessage(message.current.trim());
      formRef.current?.reset();
    }
    message.current = '';
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write a message"
        onChange={onHandleChange}
        className="input-message"
      />
      <SendButton />
      <DeleteMessageHistoryButton deleteMessages={deleteMessages} />
    </form>
  );
});

MessageForm.displayName = 'MessageForm';

export default MessageForm;
