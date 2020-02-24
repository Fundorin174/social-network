import React, { useState } from 'react';
import classes from './ToDoList.module.css';
import ToDoList from './ToDoList';
// import { createTextField } from '../common/helpFunctions';
// import { InputFieldCreator } from '../common/BlockContainer';
// import { required } from '../common/validators';


const Lists = (props) => {

  const [newToDoListName, setNewToDoListName] = useState(); //edit avatar upload mode on/off

  const setNewToDoList = (e) =>{
    let newName = e.target.value;
    setNewToDoListName(newName);
  }

  const createNewToDoList = () => {
  props.createNewToDoList(newToDoListName);
    setNewToDoListName('');
}

  const moveToDoListUp = (todolistId) => {
    let putAfterItemId;

    for (let i = 0; i < props.toDoLists.length; i++) {
        if (props.toDoLists[i - 2] && props.toDoLists[i].id === todolistId) {
            putAfterItemId = props
                .toDoLists[i - 2]
                .id;
          props.reorderedToDoList(todolistId, putAfterItemId);
        } else if (props.toDoLists[1] && props.toDoLists[1].id === todolistId){
          putAfterItemId = null;
          props.reorderedToDoList(todolistId, putAfterItemId);
        }
        
    }
    
}
  const moveToDoListDown = (todolistId) => {
    let putAfterItemId;

    for (let i = 0; i < props.toDoLists.length; i++) {
        if (props.toDoLists[i + 1] && props.toDoLists[i].id === todolistId) {
            putAfterItemId = props
                .toDoLists[i + 1]
                .id;
          props.reorderedToDoList(todolistId, putAfterItemId); 
        } 
    }
    
}

return(
  <div className = {classes.listsWithBtnWrp}>
    <h1 >СПИСОК ДЕЛ</h1>
    <div className = {classes.listsWrp}>
    {
    props.toDoLists.map((list) =>{
      return <ToDoList 
      key = {list.id}
      id = {list.id}
      title  = {list.title}
      addedDate = {list.addedDate}
      order = {list.order}
      deleteToDoList = {props.deleteToDoList}
      loadNewTask={props.loadNewTask}
      changeTask = {props.changeTask}
      tasks = {list.items}
      deleteTaskFromList = {props.deleteTaskFromList}
        formError={props.formError}
        moveToDoListUp={moveToDoListUp}
        moveToDoListDown={moveToDoListDown}
        reorderedTask={props.reorderedTask}/>
    })
    }
    </div>

    <input className = {classes.input} onChange={setNewToDoList}  placeholder = 'Введите имя нового списка'></input>    
    <button className={classes.btn} onClick={createNewToDoList}>Создать</button>

  </div>
)

}

export default Lists;
