import React, { memo } from 'react';
// @ts-ignore
import { delete_history_button } from './DeleteMessageHistoryButton.module.css';

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
      className={delete_history_button}
      type="button"
      onClick={handleClick}
    >
      Delete history
    </button>
  );
}

export default memo(DeleteMessageHistoryButton);
