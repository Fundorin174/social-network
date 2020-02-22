import React, { useState } from 'react';
import classes from './ToDoList.module.css';
import addIcon from './../../img/actions/edit_add.png';
import deleteIcon from './../../img/actions/edit_remove.png';
import editIcon from './../../img/actions/edit.png';
import NewTaskForm from './NewTaskForm';
import ChangeTaskForm from './ChangeTaskForm';



const ToDoList = props => {

  const [showNewTaskFormState, setShowNewTaskFormState] = useState(false); //edit newTask form mode on/off
  
  const [showChangeTaskFormState, setShowChangeTaskFormState] = useState(false); //edit changeTask form mode on/off

  const toggleNewTaskForm = () => {
    setShowNewTaskFormState(!showNewTaskFormState);
  }
  const toggleChangeTaskForm = () => {
    setShowChangeTaskFormState(!showChangeTaskFormState);
  }

  const loadNewTask = (newTask) => {
    const listId = props.id;
    props.loadNewTask(newTask, listId);
    toggleNewTaskForm();
  }

  
  const changeTask = (task) => {
    const listId = props.id;
    props.changeTask(task, listId);
    // toggleChangeTaskForm()
  }

  const deleteTaskFromCurrentList = ((todolistId, taskId) =>{
    props.deleteTaskFromList(todolistId, taskId)
  })

    return (<div className={classes.toDoListItem}>
        <div className={classes.toDoListItemTitle}>
          <div><b>{props.title}</b></div>
          <div><span>Создан: </span>{props.addedDate.slice(0, 19)}</div>
        </div>
        <div>Порядок:{props.order}</div>
        <div className = {classes.tasksList}>
          <div className = {classes.tasksTitle}>
            <p>Задания:</p>
            <div className={classes.tooltip} data-tooltip="Добавить задание">
              <img src={addIcon} alt="Добавить" onClick = {toggleNewTaskForm}/>
            </div>
          </div>
          {
            props.tasks && props.tasks.map((task)=>{
              return <div id = {task.id} key = {task.id} className = {classes.taskItem}>
                <span>{task.title}</span>
                <div className={classes.tooltip} onClick = {toggleChangeTaskForm} data-tooltip="Изменить задание" >
              <img src={editIcon} alt="Переименовать" />
            </div>
            <div className={classes.tooltip} onClick = {()=>{deleteTaskFromCurrentList(task.todoListId, task.id)}} data-tooltip="Удалить задание">
              <img src={deleteIcon} alt="Удалить" />
            </div>
              </div>
             })
          }
        </div>
        <button className={classes.btn} onClick={() => { props.deleteToDoList(props.id) }}>Удалить список</button>
        {showNewTaskFormState && <NewTaskForm formError={['sdf', 'sdf']} onSubmit={loadNewTask} toggleNewTaskForm={toggleNewTaskForm} />} 
        {showChangeTaskFormState && <ChangeTaskForm formError={props.formError} onSubmit={changeTask} toggleChangeTaskForm={toggleChangeTaskForm} />} 
      </div>
    );
    };


export default ToDoList;

