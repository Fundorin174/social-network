import React, {useState, useEffect} from 'react';
import classes from './Title.module.css';


const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false),
      [status, setStatus] = useState(props.currentStatus);;

      useEffect( () => {
        setStatus(props.currentStatus)
      }, [props.currentStatus]);

  const statusEditModeOn = () => {
    if(props.userID === props.autorizedUserId) {
      setEditMode(true);
    }

  }

  const statusEditModeOff = () => {
    setEditMode(false);
    props.setStatus(status);
  }

  const changeLocalStatus = (e) => {
    setStatus(e.target.value);
  }

  return <>
     {!editMode ?
  <div className = {classes.nonActive}>
      <span onDoubleClick = {statusEditModeOn} >Мой статус: {props.currentStatus || 'Нет статуса'}</span>
   </div> 
   :
   <div className = {classes.onActive}>
      <input onChange = { changeLocalStatus } autoFocus onBlur = {statusEditModeOff} type="text" value = {status}/>
  </div>
  }
  </>
}

export default ProfileStatusWithHooks;