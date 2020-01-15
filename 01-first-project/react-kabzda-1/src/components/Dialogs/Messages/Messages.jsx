import React from 'react';
import classes from './Messages.module.css';
import MsgItem from './MessageItem/MessageItem';
import FormMessagesNewMsg from './FormMessagesNewMsg';

const Messages = (props) => {

    let addNewMsg = (values) => {

        props.addNewMsg(values.someNewMsg);
        props.resetForm(FormMessagesNewMsg.defaultProps.form);
    };

    let massagesElements = props
        .messages
        .map(
            message => <MsgItem
                key={message.id}
                id={message.id}
                name={message.name}
                date={message.date}
                msg={message.msg}/>
        );

    return (
        <div className={classes.messages}>
            {massagesElements}
            <FormMessagesNewMsg onSubmit={addNewMsg}/>
        </div>
    );
}

export default Messages;