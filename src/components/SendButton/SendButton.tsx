import './SendButton.css';

import {FC, memo} from 'react';

const SendButton: FC = memo(() => (
    <button
        type="submit"
        className="send-button"
    >
        Send
    </button>
));

SendButton.displayName = 'SendButton';

export default SendButton;
