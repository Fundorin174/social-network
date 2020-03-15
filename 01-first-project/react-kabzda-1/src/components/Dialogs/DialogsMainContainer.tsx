import React from 'react';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/reduxStore';
import { addNewMsg} from '../../redux/dialogsReduser';
import { resetForm } from "../../redux/profileReduser";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import {getDialogsSelector, getMessagesSelector, getNewMsgTextelector} from "../../redux/dialogsSelectors";
import { MessagesType, DialogsType } from '../../types/types';



type MainDialogsMapStatePropsType = {
  dialogs: DialogsType
  messages: MessagesType
  newMsgText: string
}
type MainDialogsMapDispatchPropsType = {
  addNewMsg: (newMsg: string) => void
  resetForm: (formName: string) => void
}

type MainDialogsOwnPropsType = {}

export type MainDialoglPropsType = MainDialogsMapStatePropsType & MainDialogsMapDispatchPropsType & MainDialogsOwnPropsType

let mapStateToProps = (state: AppStateType): MainDialogsMapStatePropsType => ({
    dialogs: getDialogsSelector(state),
    messages: getMessagesSelector(state),
    newMsgText: getNewMsgTextelector(state)
})





export default compose(
  withAuthRedirect,
  connect<MainDialogsMapStatePropsType, MainDialogsMapDispatchPropsType, MainDialogsOwnPropsType, AppStateType>(mapStateToProps, { addNewMsg, resetForm })
)(Dialogs);
