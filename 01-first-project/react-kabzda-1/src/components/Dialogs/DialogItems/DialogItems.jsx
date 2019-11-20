import React from 'react';
import classes from './DialogItems.module.css';
import DialogItem from './DialogItem/DialogItem';


const DialogItems = (props) => {

    return (
        <div className={classes.dialogItems}>

            <DialogItem id='1' name='Alex' date='June, 25, 2019' msg='Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.'/>
            <DialogItem id='2'name='Dima' date='June, 24, 2019' msg='Incididunt aliquip consequat commodo id nulla exercitation deserunt.'/>
        
        </div>
    );
}

export default DialogItems;