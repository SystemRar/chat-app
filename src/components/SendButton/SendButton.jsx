import './SendButton.css';
import PropTypes from "prop-types";

function SendButton({sendMessage, message, setMessage}) {

    function handleClick(event) {
        event.preventDefault();

        if (message.trim() !== '') {
            sendMessage(message);
            setMessage('');
        }
    }

    return (
        <button
            onClick={handleClick}
            type={"submit"}
        >
            Send</button>
    )
}

SendButton.propTypes = {
    sendMessage: PropTypes.func,
    message: PropTypes.string,
    setMessage: PropTypes.func
}


export default SendButton;
