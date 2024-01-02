import './DeleteMessageHistoryButton.css';
import React, { memo } from 'react';

interface DeleteHistoryProps {
  deleteMessages: () => void;
}

function DeleteMessageHistoryButton({ deleteMessages }: DeleteHistoryProps) {
  function handleClick(event: React.MouseEvent) {
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

export default memo(DeleteMessageHistoryButton);
