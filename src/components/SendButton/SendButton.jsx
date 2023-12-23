import './SendButton.css';

import PropTypes from "prop-types";
import {memo, useCallback} from "react";

const SendButton = memo(function SendButton({sendMessage, message, setMessage}) {
    const handleClick = useCallback((event) => {
        event.preventDefault();
        if (message.trim() !== '') {
            sendMessage(message);
            setMessage('');
        }
    }, [message, sendMessage, setMessage]);

    return (
        <button
            onClick={handleClick}
            type="submit"
        >
            Send
        </button>
    );
});

SendButton.propTypes = {
    sendMessage: PropTypes.func,
    message: PropTypes.string,
    setMessage: PropTypes.func
};

SendButton.displayName = 'SendButton';

export default SendButton;