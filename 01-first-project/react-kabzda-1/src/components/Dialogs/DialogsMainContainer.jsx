import React from 'react';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { addNewMsg} from './../../redux/dialogsReduser';
import { resetForm } from "./../../redux/profileReduser";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import {getDialogsSelector, getMessagesSelector, getNewMsgTextelector} from "../../redux/dialogsSelectors";



let mapStateToProps = (state) => {
  return {
    dialogs: getDialogsSelector(state),
    messages: getMessagesSelector(state),
    newMsgText: getNewMsgTextelector(state)
  }
}


export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { addNewMsg, resetForm })
)(Dialogs);
