import React from 'react';
import classes from './Dialogs.module.css'; 
import DialogItems from './DialogItems/DialogItems';
import Messages from './Messages/Messages';


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <DialogItems />
            <Messages />
        </div>
    );
}

export default Dialogs;