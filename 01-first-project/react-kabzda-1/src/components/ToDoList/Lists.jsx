import React from 'react';
import classes from './ToDoList.module.css';
import ToDoList from './ToDoList';


const Lists = (props) => {




return(
  <div className = {classes.listsWithBtnWrp}>
    <div className = {classes.listsWrp}>
    {
    props.toDoLists.map((list) =>{
      return <ToDoList 
      key = {list.id}
      id = {list.id}
      title  = {list.title}
      addedDate = {list.addedDate}
      order = {list.order}
      deleteToDoList = {props.deleteToDoList}/>
    })
    }
    </div>
    <button onClick = {()=>{props.createNewToDoList('Ваще Новый список')}}>Создать новый список</button>

  </div>
)

}

export default Lists;
