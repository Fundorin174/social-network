import React from 'react';
import classes from './ToDoList.module.css';
import Title from '../Profile/Title/Title';
import Lists from './Lists';


const ToDoLists = React.memo(props => {
    return (
      <div className={classes.content}>
        <Title
          formError={props.formError}
          loadProfileData = {props.loadProfileData}
          autorizedUserId={props.autorizedUserId}
          currentStatus={props.currentStatus}
          currentProfile={props.currentProfile}
          setStatus={props.setStatus}
          upLoadAvatar={props.upLoadAvatar}
          loadProfileDataSuccess={props.loadProfileDataSuccess}
          setErrors={props.setErrors}
          isloadProfileDataSuccess= {props.isloadProfileDataSuccess}/>
        <Lists 
        createNewToDoList = {props.createNewToDoList} 
          deleteToDoList={props.deleteToDoList}
          toDoLists = {props.toDoLists}/>
      </div>
    );
    });


export default ToDoLists;

