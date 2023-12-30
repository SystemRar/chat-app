import './ChatWindow.css';

import PropTypes from 'prop-types';
import { memo } from 'react';

function ChatWindow({ messages }) {
  const messagesHistory = messages.map((message, index) => (
    <p key={index} className="message">{message}</p>
  ));

  return (
    <div className="chat-window">
      {messagesHistory}
    </div>
  );
}

ChatWindow.defaultProps = {
  messages: [],
};

ChatWindow.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string),
};

export default memo(ChatWindow);
