import React from 'react';
import classes from './Dialogs.module.css'; 
import DialogItemsContainer from './DialogItems/DialogItemsContainer';
import MessagesContainer from './Messages/MessagesContainer';


const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
            <DialogItemsContainer />
            <MessagesContainer />
        </div>
    );
}

export default Dialogs;