import React from 'react';
import Frend from './Frend';
// import StoreContext from './../../../../storeContext';
import {connect} from 'react-redux';

let mapStateToProps = (state) =>{
    return {
        name: state.navBar.frends.name
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        
    }
}

const FrendContainer = connect(mapStateToProps, mapDispatchToProps) (Frend);
export default FrendContainer;