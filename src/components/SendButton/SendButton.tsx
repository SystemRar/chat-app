import { memo } from 'react';
// @ts-ignore
import { send_button } from './SendButton.module.css';

const SendButton = memo(() => (
  <button
    type="submit"
    className={send_button}
  >
    Send
  </button>
));

SendButton.displayName = 'SendButton';

export default SendButton;
