import React from 'react';
import NavbarFriends from './NavBarFrends';
// import StoreContext from './../../../storeContext';
import {connect} from 'react-redux';



let mapStateToProps = (state) => {
    return {
        frends: state.navBar.frends
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

const NavbarFriendsContainer = connect(mapStateToProps, mapDispatchToProps) (NavbarFriends);

export default NavbarFriendsContainer;