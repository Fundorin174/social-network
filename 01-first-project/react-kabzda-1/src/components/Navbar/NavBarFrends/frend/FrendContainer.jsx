import React from 'react';
import Frend from './Frend';
import StoreContext from './../../../../storeContext';


const FrendContainer = (props) => {
    return (

<StoreContext.Consumer>
            {
                (store) => 
                {
                    let state = store.getState();
                    

                    return <Frend name = {state.navBar.frends.name}/>



                }
            }
</StoreContext.Consumer>


    

);
}

export default FrendContainer;