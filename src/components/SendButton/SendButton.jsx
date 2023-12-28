import './SendButton.css';

import { memo } from 'react';

const SendButton = memo(() => (
  <button
    type="submit"
    className="send-button"
  >
    Send
  </button>
));

SendButton.displayName = 'SendButton';

export default SendButton;
