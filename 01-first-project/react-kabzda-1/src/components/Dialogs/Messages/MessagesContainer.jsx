import React from 'react';
import Messages from './Messages';
import {addNewMsgActionCreator, changeNewMsgActionCreator} from '../../../redux/dialogsReduser'
import StoreContext from '../../../storeContext';

const MessagesContainer = (props) => {


    return (

        <StoreContext.Consumer>
            {
                (store) => 
                {
                    let state = store.getState();
                    let addNewMsg = (newMsg) => {
                        let action = addNewMsgActionCreator(newMsg);
                        store.dispatch(action);
                    }

                    let changeNewMsgText = (newMsgText) => {
                        let action = changeNewMsgActionCreator(newMsgText);
                        store.dispatch(action);
                    }


                    return <Messages 
                        addNewMsg = {addNewMsg} 
                        changeNewMsgText = {changeNewMsgText}
                        messages={state.dialogPage.messages}
                        newMsgText = {state.dialogPage.newMsgText} />;
                        

                }
            }
        </StoreContext.Consumer>

    );

    
}

export default MessagesContainer;