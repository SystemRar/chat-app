import './MessageForm.css';

import PropTypes from "prop-types";
import React, {useState} from "react";

import SendButton from "../SendButton/SendButton.jsx";

const MessageForm = React.memo(({sendMessage}) => {
    const [message, setMessage] = useState('');

    function handleChange(event) {
        setMessage(event.target.value);
    }

    function handleSend(event) {
        if (event.key === 'Enter' && message.trim() !== '') {
            sendMessage(message);
            setMessage('');
        }
    }

    return (
        <form>
            <input
                type="text"
                placeholder={'Write a message'}
                onChange={handleChange}
                onKeyUp={handleSend}
                value={message}
            />
            <SendButton sendMessage={sendMessage} message={message} setMessage={setMessage}/>
        </form>
    )
});

MessageForm.propTypes = {
    sendMessage: PropTypes.func
}

export default MessageForm;
