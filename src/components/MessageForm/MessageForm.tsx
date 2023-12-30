import './MessageForm.css';

import PropTypes from 'prop-types';
import { memo, useRef } from 'react';

import DeleteMessageHistoryButton from '../DeleteMessageHistoryButton/DeleteMessageHistoryButton.js';
import SendButton from '../SendButton/SendButton';

const MessageForm = memo(({ sendMessage, deleteMessages }) => {
  const message = useRef('');
  const formRef = useRef(null);

  function onHandleChange(event) {
    message.current = event.target.value;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const isMessageEmpty = message.current.trim() === '';

    if (!isMessageEmpty) {
      sendMessage(message.current.trim());
      formRef.current.reset();
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

MessageForm.defaultProps = {
  sendMessage: '',
  deleteMessages: null,
};

MessageForm.propTypes = {
  sendMessage: PropTypes.func,
  deleteMessages: PropTypes.func,
};

MessageForm.displayName = 'MessageForm';

export default MessageForm;
