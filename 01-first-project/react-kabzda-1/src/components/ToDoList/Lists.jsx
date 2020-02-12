import React from 'react';
import classes from './ToDoList.module.css';


const Lists = (props) => {




return(
  <div className = {classes.listsWrp}>
    Тут списки
    <button onClick = {()=>{props.createNewToDoList('Ваще Новый список')}}>Создать новый список</button>
    <button onClick={() => { props.deleteToDoList('162d0068-c5b5-4857-8d5d-0776d68b9fe3') }}>Удалить список</button>
  </div>
)

}

export default Lists;
