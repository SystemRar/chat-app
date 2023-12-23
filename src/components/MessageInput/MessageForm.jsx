import './MessageForm.css';

import PropTypes from "prop-types";
import {memo, useCallback, useState} from "react";

import SendButton from "../SendButton/SendButton.jsx";

const MessageForm = memo(function MessageForm({sendMessage}) {
    const [message, setMessage] = useState('');

    const handleChange = useCallback((event) => {
        setMessage(event.target.value);
    }, []);

    const handleSend = useCallback((event) => {
        if (event.key === 'Enter' && message.trim() !== '') {
            sendMessage(message);
            setMessage('');
        }
    }, [message, sendMessage]);

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
    );
});

MessageForm.propTypes = {
    sendMessage: PropTypes.func
};

MessageForm.displayName = 'MessageForm';

export default MessageForm;