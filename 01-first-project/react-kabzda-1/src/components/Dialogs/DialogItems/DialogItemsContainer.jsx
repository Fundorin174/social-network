import React from 'react';
import DialogItems from './DialogItems';
import StoreContext from '../../../storeContext';

const DialogItemsContainer = (props) => {



    return (

        <StoreContext.Consumer>
            {
                (store) => 
                {
                    let state = store.getState();
                    
                    return <DialogItems dialogs = {state.dialogPage.dialogs}/>;



                }
            }
        </StoreContext.Consumer>

    );


}

export default DialogItemsContainer;
