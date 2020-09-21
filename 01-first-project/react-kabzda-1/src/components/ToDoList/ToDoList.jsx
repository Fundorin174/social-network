import React, { useState } from 'react';
import classes from './ToDoList.module.css';
import addIcon from './../../img/actions/edit_add.png';
import NewTaskForm from './NewTaskForm';
import ChangeTaskForm from './ChangeTaskForm';
import TaskItem from './TaskItem';
import UpButton from './../../img/UP.png';
import DownButton from './../../img/DOWN.png';




const ToDoList = props => {

  const [showNewTaskFormState, setShowNewTaskFormState] = useState(false); //edit newTask form mode on/off
  
  const [showChangeTaskFormState, setShowChangeTaskFormState] = useState(false); //edit changeTask form mode on/off

  const [currentTaskId, setCurrentTaskId] = useState(); //current task ID to changed task

  const toggleNewTaskForm = () => {
    setShowNewTaskFormState(!showNewTaskFormState);
  }
  const toggleChangeTaskForm = () => {
    setShowChangeTaskFormState(!showChangeTaskFormState);
  }

  const toggleChangeTaskFormAndSendIdToForm = (id) => {
    setShowChangeTaskFormState(!showChangeTaskFormState);
    setCurrentTaskId(id);
  }



  const loadNewTask = (newTask) => {
    const listId = props.id;
    props.loadNewTask(newTask, listId);
    toggleNewTaskForm();
  }

  
  const changeTask = (task) => {
    const listId = props.id;
    let taskId = currentTaskId;
    props.changeTask(task, taskId, listId);
    toggleChangeTaskForm();
  }

  const deleteTaskFromCurrentList = ((todolistId, taskId) =>{
    props.deleteTaskFromList(todolistId, taskId)
  })

  const moveTaskUp = (taskId) => {
    let putAfterItemId;
    const toDoListId = props.id;
    for (let i = 0; i < props.tasks.length; i++) {
      if (props.tasks[i - 2] && props.tasks[i].id === taskId) {
        putAfterItemId = props.tasks[i - 2].id;
        props.reorderedTask(toDoListId, taskId, putAfterItemId);
      } else if (props.tasks[1] && props.tasks[1].id === taskId) {
        putAfterItemId = null;
        props.reorderedTask(toDoListId, taskId, putAfterItemId);
      }

    }

  }
  const moveTaskDown = (taskId) => {
    let putAfterItemId;
    const toDoListId = props.id;
    for (let i = 0; i < props.tasks.length; i++) {
      if (props.tasks[i + 1] && props.tasks[i].id === taskId) {
        putAfterItemId = props.tasks[i + 1].id;
        props.reorderedTask(toDoListId, taskId, putAfterItemId);
      }
    }

  }

    return (<div className={classes.toDoListItem}>
        <div className={classes.toDoListItemTitle}>
          <div><b>{props.title}</b></div>
        <div className={classes.tooltip} onClick={() => { props.moveToDoListUp(props.id) }} data-tooltip="Переместить список наверх">
          <img src={UpButton} alt='UP' />
        </div>
        <div className={classes.tooltip} onClick={() => { props.moveToDoListDown(props.id) }} data-tooltip="Переместить список вниз">
          <img src={DownButton} alt='Down' />
        </div>
          
          <div><span>Создан: </span>{props.addedDate.slice(0, 19)}</div>
        </div>
        {/* <div>Порядок:{props.order}</div> */}
        <div className = {classes.tasksList}>
          <div className = {classes.tasksTitle}>
            <p>Задания:</p>
            <div className={classes.tooltip} data-tooltip="Добавить задание">
              <img src={addIcon} alt="Добавить" onClick = {toggleNewTaskForm}/>
            </div>
          </div>
          {
            props.tasks && props.tasks.map((taskItem)=>{
              return <TaskItem key={taskItem.id} taskItem={taskItem} toggleChangeTaskFormAndSendIdToForm={toggleChangeTaskFormAndSendIdToForm}
                deleteTaskFromCurrentList={deleteTaskFromCurrentList}
                moveTaskDown={moveTaskDown}
                moveTaskUp={moveTaskUp}/>
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

