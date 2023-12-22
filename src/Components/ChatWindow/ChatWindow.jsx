import './ChatWindow.css';

import PropTypes from "prop-types";

function ChatWindow({allMessages}) {

    const messageList = allMessages.map((message, index) => {
        return (
            <p
                key={index}
                className={'message'}
            >
                {message}</p>
        )
    });

    console.log('render');

    return (
        <div className={'chat-window'}>
            {messageList}
        </div>
    )
}

ChatWindow.propTypes = {
    allMessages: PropTypes.arrayOf(PropTypes.string)
}

export default ChatWindow;
