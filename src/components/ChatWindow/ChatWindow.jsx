import './ChatWindow.css';

import PropTypes from 'prop-types';

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

ChatWindow.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string),
};

export default ChatWindow;
