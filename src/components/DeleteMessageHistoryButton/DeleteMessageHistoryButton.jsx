import './DeleteMessageHistoryButton.css';

import PropTypes from 'prop-types';
import { memo } from 'react';

function DeleteMessageHistoryButton({ deleteMessages }) {
  function handleClick(event) {
    event.preventDefault();

    deleteMessages();
  }

  return (
    <button
      className="delete-history-button"
      type="button"
      onClick={handleClick}
    >
      Delete history
    </button>
  );
}

DeleteMessageHistoryButton.defaultProps = {
  deleteMessages: null,
};

DeleteMessageHistoryButton.propTypes = {
  deleteMessages: PropTypes.func,
};

export default memo(DeleteMessageHistoryButton);
