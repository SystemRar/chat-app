import './MessageForm.css';
import React, {FC, memo, useRef} from 'react';

import DeleteMessageHistoryButton from '../DeleteMessageHistoryButton/DeleteMessageHistoryButton.js';
import SendButton from '../SendButton/SendButton';

interface MessageFormProps {
    sendMessage: Function;
    deleteMessages: Function;
}

const MessageForm: FC<MessageFormProps> = memo(({sendMessage, deleteMessages}) => {
    const message = useRef('');
    const formRef = useRef<HTMLFormElement>(null);

    function onHandleChange(event: React.ChangeEvent) {
        const target = event.target as HTMLInputElement
        message.current = target.value;
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const isMessageEmpty = message.current.trim() === '';

        if (!isMessageEmpty) {
            sendMessage(message.current.trim());
            formRef.current?.reset();
        }
        message.current = '';
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Write a message"
                onChange={onHandleChange}
                className="input-message"
            />
            <SendButton/>
            <DeleteMessageHistoryButton deleteMessages={deleteMessages}/>
        </form>
    );
});

MessageForm.displayName = 'MessageForm';

export default MessageForm;
