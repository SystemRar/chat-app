import './MessageForm.css';

import PropTypes from 'prop-types';
import { memo, useState } from 'react';

import DeleteMessageHistoryButton from '../DeleteMessageHistoryButton/DeleteMessageHistoryButton';
import SendButton from '../SendButton/SendButton';

const MessageForm = memo(({ sendMessage, deleteMessages }) => {
  const [message, setMessage] = useState('');

  function onHandleChange(event) {
    setMessage(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isMessageEmpty = message.trim() === '';

    if (!isMessageEmpty) {
      sendMessage(message.trim());
    }
    setMessage('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write a message"
        onChange={onHandleChange}
        value={message}
        className="input-message"
      />
      <SendButton />
      <DeleteMessageHistoryButton deleteMessages={deleteMessages} />
    </form>
  );
});

MessageForm.propTypes = {
  sendMessage: PropTypes.func,
  deleteMessages: PropTypes.func,
};

MessageForm.displayName = 'MessageForm';

export default MessageForm;
