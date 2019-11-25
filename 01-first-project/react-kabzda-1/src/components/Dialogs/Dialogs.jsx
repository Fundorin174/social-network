import React from 'react';
import classes from './Dialogs.module.css'; 
import DialogItems from './DialogItems/DialogItems';
import Messages from './Messages/Messages';


const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
            <DialogItems dialogs={props.data.dialogs} />
            <Messages messages={props.data.messages} newMsgText={props.data.newMsgText}  store={props.store}/>
        </div>
    );
}

export default Dialogs;