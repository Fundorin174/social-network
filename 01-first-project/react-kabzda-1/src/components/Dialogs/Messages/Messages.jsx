import React from 'react';
import classes from './Messages.module.css'; 
import MsgItem from './MessageItem/MessageItem';


const Messages = (props) => {

    

    let massagesElements = props.messages.map( message =>  <MsgItem id={message.id} name='Ivan' date='June, 25, 2019' msg={message.msg} />);


    return (
        <div className ={classes.messages}>

            { massagesElements }

        </div>
    );
}

export default Messages;