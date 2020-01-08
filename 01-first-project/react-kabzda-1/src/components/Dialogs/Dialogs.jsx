import React from 'react';
import classes from './Dialogs.module.css'; 
import DialogItems from './DialogItems/DialogItems';
import Messages from './Messages/Messages';


const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
        <DialogItems dialogs = {props.dialogs}/>
        <Messages messages={props.messages} newMsgText={props.newMsgText} addNewMsg={props.addNewMsg} changeNewMsgText = {props.changeNewMsgText} />
        </div>
    );
}

export default Dialogs;