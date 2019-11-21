import React from 'react';
import classes from './Messages.module.css'; 
import MsgItem from './MessageItem/MessageItem';


const Messages = (props) => {

    let newMsgElement = React.createRef();

    let addNewMsg = () => {
        let newMsg = newMsgElement.current.value;
        props.adMsg(newMsg);
        newMsgElement.current.value='';
}
    let massagesElements = props.messages.map( message =>  <MsgItem id={message.id} name={message.name} date={message.date} msg={message.msg} />);



    return (
        <div className ={classes.messages}>

            { massagesElements }

            <textarea ref={ newMsgElement } col='30' row='3' className={classes.addNewMsg}></textarea>
            <button onClick={ addNewMsg } className={classes.msg_btn}>Добавить сообщение</button>
        </div>
    );
}

export default Messages;