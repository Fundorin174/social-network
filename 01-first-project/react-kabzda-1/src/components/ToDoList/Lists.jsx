import React from 'react';
import classes from './ToDoList.module.css';


const Lists = (props) => {




return(
  <div className = {classes.listsWrp}>
    Тут списки
    <button onClick = {()=>{props.createNewToDoList('Новый список')}}>Создать новый список</button>
  </div>
)

}

export default Lists;