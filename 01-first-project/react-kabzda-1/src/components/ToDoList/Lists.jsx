import React from 'react';
import classes from './ToDoList.module.css';


const Lists = (props) => {




return(
  <div className = {classes.listsWrp}>
    Тут списки
    <button onClick = {()=>{props.createNewToDoList('Ваще Новый список')}}>Создать новый список</button>
    <button onClick={() => { props.deleteToDoList('b21b3102-628b-4f65-86fa-0200be45cb62') }}>Удалить список</button>
  </div>
)

}

export default Lists;
