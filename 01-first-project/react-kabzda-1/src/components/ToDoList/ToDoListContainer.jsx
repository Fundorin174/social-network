import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  getProfile,
  getStatus,
  setStatus,
  upLoadAvatar,
  loadProfileData,
  setErrors,
  isloadProfileDataSuccess
} from "../../redux/profileReduser";
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {getCurrentProfileSelector, getCurrentStatusSelector, getProfileSetErrors, getloadProfileDataSuccess} from "../../redux/profileSelectors";
import {getAutorizedUserIdSelector, getIsAuthSelector} from "../../redux/authSelectors";
import { getFormSyncErrors } from 'redux-form';
import ToDoLists from './ToDoLists';
import { createNewToDoList, deleteToDoList, getAllToDoLists, loadNewTask,changeTask, deleteTaskFromList} from './../../redux/toDoListReduser'
import { getToDoListsSelector } from '../../redux/toDoListsSelectors';


const ToDoListContainerWithHooks = React.memo(props => {
    useEffect(() => {
      let userID = props.match.params.userID;
      if (!userID) {
        userID = props.autorizedUserId;
      }
      props.getProfile(userID);
      props.getStatus(userID);
      props.currentStatus !== "" && props.getStatus(userID);
      props.getAllToDoLists();
    }, [props.match.params.userID, props.toDoLists.length]);


    return (
      <ToDoLists {...props} />
    );

})


let mapStateToProps = (state) => ({
  currentProfile: getCurrentProfileSelector(state),
  currentStatus: getCurrentStatusSelector(state),
  isAuth: getIsAuthSelector(state),
  autorizedUserId: getAutorizedUserIdSelector(state),
  formError: getProfileSetErrors(state),
  loadProfileDataSuccess: getloadProfileDataSuccess(state),
  toDoLists: getToDoListsSelector(state),
});


export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { getProfile, getStatus, setStatus, upLoadAvatar, loadProfileData, setErrors, isloadProfileDataSuccess, createNewToDoList, deleteToDoList, getAllToDoLists, loadNewTask, changeTask, deleteTaskFromList}),
  withRouter
)(ToDoListContainerWithHooks);

