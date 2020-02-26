import React from 'react';
import NavbarFriends from './NavBarFrends';
// import StoreContext from './../../../storeContext';
import {connect} from 'react-redux';
import {deleteFromFrends} from './../../../redux/navBarReduser';
import { fromFriends} from './../../../redux/userReduser';
import { getUrlAIGeneratedImageSelector } from '../../../redux/profileSelectors';
import { getFrendsSelector } from '../../../redux/navBarSelectors';



let mapStateToProps = (state) => {
    return {
      frends: getFrendsSelector(state),
        urlAIGeneratedImage: getUrlAIGeneratedImageSelector(state),

    }
}


const NavbarFriendsContainer = connect(mapStateToProps, { deleteFromFrends, fromFriends })(NavbarFriends);

export default NavbarFriendsContainer;