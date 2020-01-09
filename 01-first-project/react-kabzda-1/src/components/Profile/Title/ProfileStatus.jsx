import React from 'react';
import classes from './Title.module.css';



class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }

  statusEditModeOn = () => {
    this.setState({
      editMode: true
    }) 
  }

  statusEditModeOff = () => {
    this.setState({
      editMode: false
    }) 
  }
  
  render () {
    return <>
     {!this.state.editMode ?    
  <div className = {classes.nonActive}>
      <span onDoubleClick = {this.statusEditModeOn} >Мой статус: {this.props.currentStatus}</span>
   </div> 
   :
   <div className = {classes.onActive}>
      <input autoFocus onBlur = {this.statusEditModeOff} type="text" value = {this.props.currentStatus}/>
  </div>
  }
  </>
  }
}

export default ProfileStatus;