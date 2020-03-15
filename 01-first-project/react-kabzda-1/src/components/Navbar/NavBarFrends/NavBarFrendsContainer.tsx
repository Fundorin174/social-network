import React from 'react';
import NavbarFriends from './NavBarFrends';
import {connect} from 'react-redux';
import {deleteFromFrends, setFrends} from '../../../redux/navBarReduser';
import { fromFriends, toFriends} from '../../../redux/userReduser';
import { getUrlAIGeneratedImageSelector } from '../../../redux/profileSelectors';
import { getFrendsSelector } from '../../../redux/navBarSelectors';
import { FrendType } from '../../../types/types';
import { AppStateType } from '../../../redux/reduxStore';

type NavbarFriendsCOntainerMapStatePropsType = {
  frends: Array<FrendType>
  urlAIGeneratedImage: string | null
}

type NavbarFriendsCOntainerMapDispatchPropsType = {
  deleteFromFrends: (frend: FrendType) => void
  fromFriends: (userID: number) => void
  setFrends: (frends: Array<FrendType>) => void
  toFriends: (userID: number) => void
}

type NavbarFriendsCOntainerOwnPropsType  = {}


export type NavbarFriendsCOntainerPropsType = NavbarFriendsCOntainerMapStatePropsType & NavbarFriendsCOntainerMapDispatchPropsType & NavbarFriendsCOntainerOwnPropsType



let mapStateToProps = (state: AppStateType): NavbarFriendsCOntainerMapStatePropsType => {
    return {
      frends: getFrendsSelector(state),
      urlAIGeneratedImage: getUrlAIGeneratedImageSelector(state)
    }
}


const NavbarFriendsContainer = connect<NavbarFriendsCOntainerMapStatePropsType, NavbarFriendsCOntainerMapDispatchPropsType, NavbarFriendsCOntainerOwnPropsType, AppStateType>(mapStateToProps, { deleteFromFrends, fromFriends, setFrends, toFriends })(NavbarFriends);

export default NavbarFriendsContainer;