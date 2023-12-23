import './ChatWindow.css';

import PropTypes from "prop-types";
import React from "react";

const ChatWindow = React.memo(({messages}) => {
    const messageHistory = messages.map((message, index) => (
        <p key={index} className={'message'}>{message}</p>
    ));

    return (
        <div className={'chat-window'}>
            {messageHistory}
        </div>
    );
});

ChatWindow.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.string)
};

export default ChatWindow;
