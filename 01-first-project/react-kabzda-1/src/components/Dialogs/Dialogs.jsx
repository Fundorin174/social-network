import React from 'react';
import classes from './Dialogs.module.css'; 
import DialogItems from './DialogItems/DialogItems';
import Messages from './Messages/Messages';


const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
        <DialogItems dialogs = {props.dialogs}/>
        <Messages messages={props.messages} addNewMsg={props.addNewMsg} resetForm={props.resetForm} />
        </div>
    );
}

export default Dialogs;