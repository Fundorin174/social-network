import React from 'react';
import classes from './Title.module.css';



class ProfileStatus extends React.PureComponent {
  state = {
    editMode: false,
    status: this.props.currentStatus
  }

  statusEditModeOn = () => {
    if(this.props.userID === this.props.autorizedUserId)
    this.setState({
      editMode: true
    }) 
  }

  statusEditModeOff = () => {
    this.setState({
      editMode: false
    })
    this.props.setStatus(this.state.status) 
  }

  changeLocalStatus = (e) => {
    let status = e.target.value;
    this.setState({
      status: status 
    });
  }
  

  componentDidUpdate (prevProps, prevState) {
    (prevProps.currentStatus !== this.props.currentStatus) && this.setState({
      status: this.props.currentStatus 
    });
  }

  render () {
    return <>
     {!this.state.editMode ?    
  <div className = {classes.nonActive}>
      <span onDoubleClick = {this.statusEditModeOn} >Мой статус: {this.props.currentStatus || 'Нет статуса'}</span>
   </div> 
   :
   <div className = {classes.onActive}>
      <input onChange = { this.changeLocalStatus } autoFocus onBlur = {this.statusEditModeOff} type="text" value = {this.state.status}/>
  </div>
  }
  </>
  }
}

export default ProfileStatus;