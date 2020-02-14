import React from 'react';
import classes from './ToDoList.module.css';



const ToDoList = props => {
    return (
      <div className={classes.toDoListItem}>
        <div>Название:{props.title}</div>
        <div>Дата добавления:{props.addedDate}</div>
        <div>Порядок:{props.order}</div>
        <button onClick={() => { props.deleteToDoList(props.id) }}>Удалить список</button>
      </div>
    );
    };


export default ToDoList;

