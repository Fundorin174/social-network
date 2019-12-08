import React from 'react';
import DialogItems from './DialogItems';

import { connect } from 'react-redux';




let mapStateToProps = (state) => {
 return {
    dialogs: state.dialogPage.dialogs
 }
}

let mapDispatchToProps = (state) => {
    return {

    }
   }

const DialogItemsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItems)

export default DialogItemsContainer;
