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
import { createNewToDoList, deleteToDoList, getAllToDoLists, loadNewTask, changeTask, deleteTaskFromList, reorderedToDoList, reorderedTask} from '../../redux/toDoListReduser'
import { getToDoListsSelector } from '../../redux/toDoListsSelectors';
import { ProfileType, ToDoListType } from '../../types/types';
import { AppStateType } from '../../redux/reduxStore';




type ToDoListContainerMapStatePropsType = {
  currentProfile: ProfileType | null
  currentStatus: string
  isAuth: boolean
  autorizedUserId: number
  formError: Array<string>,
  loadProfileDataSuccess: boolean
  toDoLists: Array <ToDoListType>
  match?: any
}
type ToDoListContainerMapDispatchPropsType = {
  getProfile: (userID: number) => void, 
  getStatus: (userID: number) => void, 
  setStatus: (status: string) => void, 
  upLoadAvatar: (avatar: any) => void, 
  loadProfileData: (profile: ProfileType) => void, 
  setErrors: (errors: Array <string>) => void, 
  isloadProfileDataSuccess: (result: boolean) => void, 
  createNewToDoList: (title: string) => void, 
  deleteToDoList: (todolistId: number) => void, 
  getAllToDoLists: () => void, 
  loadNewTask: (newTask: any, listId: number) => void, 
  changeTask: (task: any, taskId: number, listId: number) => void, 
  deleteTaskFromList: (todolistId: any, taskId: any) => void, 
  reorderedToDoList: (todolistId: any, putAfterItemId: any) => void, 
  reorderedTask: (toDoListId: any, taskId: any, putAfterItemId: any) => void
}
type ToDoListContainerOwnPropsType = {}
type ToDoListContainerPropsType = ToDoListContainerMapStatePropsType & ToDoListContainerMapDispatchPropsType & ToDoListContainerOwnPropsType

const ToDoListContainerWithHooks: React.FC<ToDoListContainerPropsType> = React.memo(props => {
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


let mapStateToProps = (state: AppStateType): ToDoListContainerMapStatePropsType  => ({
  currentProfile: getCurrentProfileSelector(state),
  currentStatus: getCurrentStatusSelector(state),
  isAuth: getIsAuthSelector(state),
  autorizedUserId: getAutorizedUserIdSelector(state),
  formError: getProfileSetErrors(state),
  loadProfileDataSuccess: getloadProfileDataSuccess(state),
  toDoLists: getToDoListsSelector(state)
});


export default compose(
  withAuthRedirect,
  connect<ToDoListContainerMapStatePropsType, ToDoListContainerMapDispatchPropsType, ToDoListContainerOwnPropsType, AppStateType>(mapStateToProps, { getProfile, getStatus, setStatus, upLoadAvatar, loadProfileData, setErrors, isloadProfileDataSuccess, createNewToDoList, deleteToDoList, getAllToDoLists, loadNewTask, changeTask, deleteTaskFromList, reorderedToDoList, reorderedTask}),
  withRouter
)(ToDoListContainerWithHooks);

