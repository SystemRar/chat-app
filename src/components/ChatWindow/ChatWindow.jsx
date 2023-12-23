import './ChatWindow.css';

import PropTypes from "prop-types";

function ChatWindow({messages}) {

    const messageHistory = messages.map((message, index) => {
        return (
            <p key={index} className={'message'}>{message}</p>
        )
    })

    return (
        <div className={'chat-window'}>
            {messageHistory}
        </div>
    )
}

ChatWindow.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.string)
}

export default ChatWindow;
