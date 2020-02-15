import React from 'react';
import classes from './ToDoList.module.css';



const ToDoList = props => {
    return (
      <div className={classes.toDoListItem}>
        <div className={classes.toDoListItemTitle}>
          <div><b>{props.title}</b></div>
          <div><span>Создан: </span>{props.addedDate.slice(0, 19)}</div>
        </div>
        <div>Порядок:{props.order}</div>
        <button className={classes.btn} onClick={() => { props.deleteToDoList(props.id) }}>Удалить список</button>
      </div>
    );
    };


export default ToDoList;

