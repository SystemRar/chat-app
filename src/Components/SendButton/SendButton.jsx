import './SendButton.css';

import PropTypes from "prop-types";

function SendButton({handleSendMessages, message}) {
    function handleClick() {
        if (message === '') {
            return
        }

        handleSendMessages(message);
    }

    function handleKeyPress(event) {
        if (event.key === 'enter') {
            handleClick();
        }
    }

    return (

        <button
            onClick={handleClick}
            onKeyUp={handleKeyPress}
        >
            Send</button>
    )
}

SendButton.propTypes = {
    message: PropTypes.string,
    handleSendMessages: PropTypes.func
}

export default SendButton;
