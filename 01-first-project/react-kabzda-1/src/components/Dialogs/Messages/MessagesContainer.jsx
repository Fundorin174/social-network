import React from 'react';
import Messages from './Messages';
import {addNewMsgActionCreator, changeNewMsgActionCreator} from '../../../redux/dialogsReduser'
import {connect} from 'react-redux';



let mapStateToProps = (state) => {
    return {
        messages: state.dialogPage.messages,
        newMsgText: state.dialogPage.newMsgText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMsg: (newMsg) => {
            let action = addNewMsgActionCreator(newMsg);
            dispatch(action);
        },

        changeNewMsgText: (newMsgText) => {
            let action = changeNewMsgActionCreator(newMsgText);
            dispatch(action);
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (Messages);


export default MessagesContainer;