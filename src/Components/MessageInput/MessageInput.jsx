import './MessageInput.css';
import PropTypes from "prop-types";
import {useState} from "react";

function MessageInput({handleMessageChange}) {
    const [message, setMessage] = useState('')

    function handleChange(e) {
        e.preventDefault();

        setMessage(e.target.value);
        handleMessageChange(e.target.value);
    }

    return (
        <input
            type="text"
            placeholder={'Write a message'}
            onChange={handleChange}
            value={message}
        />
    )
}

MessageInput.propTypes = {
    handleMessageChange: PropTypes.func
}

export default MessageInput;
