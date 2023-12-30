import './DeleteMessageHistoryButton.css';
import React, {FC, memo} from 'react';

interface DeleteMessageHistoryButtonProps {
    deleteMessages: Function;
}

const DeleteMessageHistoryButton: FC<DeleteMessageHistoryButtonProps> = ({deleteMessages}) => {
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
