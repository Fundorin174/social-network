import React from 'react';
import classes from './Messages.module.css'; 
import MsgItem from './MessageItem/MessageItem';



const Messages = (props) => {



    let addNewMsg = () => {
        let newMsg = props.newMsgText;
        props.addNewMsg(newMsg);
    };

    let changeNewMsgText = (e) => {
        let newMsgText = e.target.value;
        props.changeNewMsgText(newMsgText);
    }


    let massagesElements = props.messages.map(message =>  <MsgItem id={message.id} name={message.name} date={message.date} msg={message.msg} />);



    return (
        <div className = {classes.messages}>

            { massagesElements }

            <textarea onChange={changeNewMsgText} value={props.newMsgText}
            col='30' row='3' className={classes.addNewMsg} placeholder='Введите сообщение'></textarea>
            <button onClick={ addNewMsg } className={classes.msg_btn}>Добавить сообщение</button>
        </div>
    );
}

export default Messages;