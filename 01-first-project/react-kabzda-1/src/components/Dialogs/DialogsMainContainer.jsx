import React from 'react';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { addNewMsg, changeNewMsgText } from './../../redux/dialogsReduser';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
    newMsgText: state.dialogPage.newMsgText
  }
}


export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { addNewMsg, changeNewMsgText })
)(Dialogs);
