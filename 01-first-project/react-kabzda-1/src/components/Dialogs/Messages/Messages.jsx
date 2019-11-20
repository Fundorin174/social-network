import React from 'react';
import classes from './Messages.module.css'; 
import DialogItem from './../DialogItems/DialogItem/DialogItem';


const Messages = (props) => {

    return (
        <div className ={classes.messages}>
            <DialogItem id='3' name='Ivan' date='June, 25, 2019' msg='Est adipisicing deserunt id anim culpa nulla.'/>
            <DialogItem id='3' name='Ivan' date='June, 25, 2019' msg=' Velit occaecat dolor anim non. '/>
            <DialogItem  id='3'name='Ivan' date='June, 25, 2019' msg='Culpa cupidatat laboris eiusmod do aute veniam qui consequat.'/>
            <DialogItem id='3' name='Ivan' date='June, 25, 2019' msg='Esse occaecat fugiat id excepteur ullamco aliquip.'/>
            <DialogItem id='3' name='Ivan' date='June, 25, 2019' msg='Labore elit elit dolore commodo laborum proident.'/>
        </div>
    );
}

export default Messages;