import './ChatWindow.css';

import React, {FC, memo} from 'react';

interface ChatWindowProps {
    messages: Array<string>;
}

const ChatWindow: FC<ChatWindowProps> = ({messages}) => {
    const messagesHistory = messages.map((message: string, index: number) => (
        <p key={index} className="message">{message}</p>
    ));

    return (
        <div className="chat-window">
            {messagesHistory}
        </div>
    );
}

export default memo(ChatWindow);
