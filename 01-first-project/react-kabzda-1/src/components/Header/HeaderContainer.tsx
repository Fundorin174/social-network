import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {logout, AuthInitialStateType} from "../../redux/authReduser";
import {getProfile, getStatus} from "../../redux/profileReduser";
import {getAllAuthDataSelector, getIsAuthSelector} from "../../redux/authSelectors";
import { AppStateType } from '../../redux/reduxStore';

type HeaderContainerMapStatePropsType = {
  data: AuthInitialStateType
  isAuth: boolean
}

type HeaderContainerMapDispatchPropsType = {
  logout: () => void
  getProfile: (userID: number) => void
  getStatus: (userID: number) => void 
}

type HeaderContainerOwnPropsType = {

}

type HeaderContainerPropsType = HeaderContainerMapStatePropsType & HeaderContainerMapDispatchPropsType & HeaderContainerOwnPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {



  render() {

    return (
        <Header {...this.props} />
    );
  }
}



let mapStateToProps = (state: AppStateType): HeaderContainerMapStatePropsType => ({
  data: getAllAuthDataSelector(state),
  isAuth: getIsAuthSelector(state)
});

export default connect<HeaderContainerMapStatePropsType, HeaderContainerMapDispatchPropsType, HeaderContainerOwnPropsType, AppStateType>(mapStateToProps, { logout, getProfile, getStatus })(HeaderContainer);