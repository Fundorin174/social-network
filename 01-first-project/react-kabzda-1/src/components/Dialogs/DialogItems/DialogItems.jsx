import React from 'react';
import classes from './DialogItems.module.css';
import DialogItem from './DialogItem/DialogItem';


const DialogItems = (props) => {

let dialogsData = [
{id: '1', name: 'Alex', date: 'June, 25, 2019'},
{id: '2', name: 'Dima', date: 'June, 24, 2019'},
{id: '3', name: 'Sveta', date: 'June, 23, 2019'},
{id: '4', name: 'Sasha', date: 'May, 24, 2019'},
{id: '5', name: 'Viktor', date: 'June, 24, 2018'},
{id: '6', name: 'Valera', date: 'June, 04, 2017'}
];

let dialogElements = dialogsData.map( dialogItem => <DialogItem id={dialogItem.id} name={dialogItem.name} date={dialogItem.date} />);
return (
<div className={classes.dialogItems}>
    { dialogElements }
</div>
);
}

export default DialogItems;
