import React, { useState } from 'react';
import classes from './ToDoList.module.css';
import addIcon from './../../img/actions/edit_add.png';
import deleteIcon from './../../img/actions/edit_remove.png';
import editIcon from './../../img/actions/edit.png';
import NewTaskForm from './NewTaskForm';



const ToDoList = props => {

  const [showNewTaskFormState, setShowNewTaskFormState] = useState(false); //edit newTask form mode on/off

  const toggleNewTaskForm = () => {
    setShowNewTaskFormState(!showNewTaskFormState);
  }

  const loadNewTask = (newTask) => {
    const listId = props.id;
    props.loadNewTask(newTask, listId);
  }

  // const tasks = () =>{
  //   props.tasks.map((task)=>{
  //    return <div><span>{task.title}</span></div>
  //   })
  // }
    return (
      <div className={classes.toDoListItem}>
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
            <div className={classes.tooltip} data-tooltip="Переименовать задание" >
              <img src={editIcon} alt="Переименовать" />
            </div>
            <div className={classes.tooltip} data-tooltip="Удалить задание">
              <img src={deleteIcon} alt="Удалить" />
            </div>
          </div>
          {
            props.tasks && props.tasks.map((task)=>{
              return <div key = {task.id}><span>{task.title}</span></div>
             })
          }
        </div>
        <button className={classes.btn} onClick={() => { props.deleteToDoList(props.id) }}>Удалить список</button>
        {showNewTaskFormState && <NewTaskForm formError={['sdf', 'sdf']} onSubmit={loadNewTask} toggleNewTaskForm={toggleNewTaskForm} />} 
      </div>
    );
    };


export default ToDoList;

