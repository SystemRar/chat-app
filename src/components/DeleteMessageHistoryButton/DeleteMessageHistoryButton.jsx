import './DeleteMessageHistoryButton.css';

import PropTypes from 'prop-types';

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

DeleteMessageHistoryButton.propTypes = {
  deleteMessages: PropTypes.func,
};

export default DeleteMessageHistoryButton;
