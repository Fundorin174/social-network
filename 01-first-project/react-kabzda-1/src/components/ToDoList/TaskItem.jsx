import React from 'react';
import classes from './ToDoList.module.css';
import deleteIcon from './../../img/actions/edit_remove.png';
import editIcon from './../../img/actions/edit.png';
import descriptionIcon from './../../img/tasks/description.png';
import deadlineIcon from './../../img/tasks/deadline.png';
import startDateIcon from './../../img/tasks/startDate.png';
import UpButton from './../../img/UP.png';
import DownButton from './../../img/DOWN.png';


const TaskItem = props => {


return (
<div id={props.taskItem.id}  className={classes.taskItem}>
    <span className={props.taskItem.completed ? classes.lineThrough : null}>- {props.taskItem.title}</span>
  <div className={classes.tooltip} onClick={()=> props.toggleChangeTaskFormAndSendIdToForm(props.taskItem.id)}
    data-tooltip="Изменить задание" >
    <img src={editIcon} alt="Переименовать" />
  </div>
  <div className={classes.tooltip} onClick={() => {
      props.deleteTaskFromCurrentList(props.taskItem.todoListId,
    props.taskItem.id) }} data-tooltip="Удалить задание">
    <img src={deleteIcon} alt="Удалить" />
  </div>
    <div className={classes.tooltip} data-tooltip={props.taskItem.description? `Описание: ${props.taskItem.description}` : `Описание: отсутствует`}>
      <img src={descriptionIcon} alt="Описание" />
  </div>
    <div className={classes.tooltip} data-tooltip={props.taskItem.startDate ? `Начато: ${props.taskItem.startDate}` : `Начато: не задано`}>
      <img src={startDateIcon} alt="Начато" />
  </div>
    <div className={classes.tooltip} data-tooltip={props.taskItem.deadline ? `Deadline: ${props.taskItem.deadline}` : `Deadline: не задан`}>
      <img src={deadlineIcon} alt="Deadline" />
  </div>
    <div className={classes.tooltip} onClick={() => { props.moveTaskUp(props.taskItem.id) }} data-tooltip="Переместить задание выше">
      <img src={UpButton} alt='UP' />
    </div>
    <div className={classes.tooltip} onClick={() => { props.moveTaskDown(props.taskItem.id) }} data-tooltip="Переместить задание ниже">
      <img src={DownButton} alt='Down' />
    </div>
</div>
)}


export default TaskItem;