import React, {useEffect} from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {
  getProfile,
  getStatus,
  setStatus,
  upLoadAvatar,
  loadProfileData,
  setErrors,
  isloadProfileDataSuccess,
  getGeneratedPhoto,
  isSetAIAvatarGeneratedSucces
} from "../../redux/profileReduser";
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {getCurrentProfileSelector, getCurrentStatusSelector, getProfileSetErrors, getloadProfileDataSuccess,  getUrlAIGeneratedImageSelector, getIsAIAvatarGeneratedSucces, getaVatarNotFoundMsgSelector} from "../../redux/profileSelectors";
import {getAutorizedUserIdSelector, getIsAuthSelector} from "../../redux/authSelectors";
import { getFormSyncErrors } from 'redux-form';
import { ProfileType, AIFaceMetaType} from '../../types/types';
import { AppStateType } from '../../redux/reduxStore';


type ProfileContainerWithHooksMapStatePropsType = {
  currentProfile: ProfileType | null
  currentStatus: string | null
  isAuth: boolean
  autorizedUserId: number
  formError: Array < string >
  loadProfileDataSuccess: boolean
  urlAIGeneratedImage: null | string
  isAIAvatarGeneratedSucces: boolean
  aVatarNotFoundMsg: string
  match?: any
}

type ProfileContainerWithHooksMapDispatchPropsType = {
  getProfile: (userID: number) => void
  getStatus: (userID: number) => void
  setStatus: (status: string) => void
  upLoadAvatar: (avatar: any) => void
  loadProfileData: (profile: ProfileType) => void
  setErrors: (errors: Array<string>) => void 
  isloadProfileDataSuccess: (result: boolean) => void 
  getGeneratedPhoto: (faceParams: AIFaceMetaType , page: number, perPage: number, orderBy: string) => void
  setAIAvatarGeneratedSucces: (state: boolean, msg: string) => void
}

type ProfileContainerWithHooksOwnPropsType = {

}

type ProfileContainerWithHooksPropsType = ProfileContainerWithHooksMapStatePropsType & ProfileContainerWithHooksMapDispatchPropsType & ProfileContainerWithHooksOwnPropsType

const ProfileContainerWithHooks: React.FC<ProfileContainerWithHooksPropsType> = React.memo(props => {

    useEffect(() => {
      let userID = props.match.params.userID;
      if (!userID) {
        userID = props.autorizedUserId;
      }
      props.getProfile(userID);
      props.getStatus(userID);
      props.currentStatus !== "" && props.getStatus(userID);
    }, [props.match.params.userID]);


    return (
      <Profile {...props} />
    );

})


// class ProfileContainer extends React.Component {
//
//   componentDidMount() {
//
//     let userID = this.props.match.params.userID;
//     if (!userID) userID =  this.props.autorizedUserId;
//     this.props.getProfile(userID);
//     this.props.getStatus(userID);
//     this.props.currentStatus !== '' && this.props.getStatus(userID);
//   }
//
//
//     render() {
//
//         return (
//           <Profile {...this.props} currentStatus = {this.props.currentStatus} currentProfile={this.props.currentProfile} setStatus = {this.props.setStatus}/>
//         );
//
//     }
//
// }

let mapStateToProps = (state: AppStateType): ProfileContainerWithHooksMapStatePropsType => ({
  currentProfile: getCurrentProfileSelector(state),
  currentStatus: getCurrentStatusSelector(state),
  isAuth: getIsAuthSelector(state),
  autorizedUserId: getAutorizedUserIdSelector(state),
  formError: getProfileSetErrors(state),
  loadProfileDataSuccess: getloadProfileDataSuccess(state),
  urlAIGeneratedImage: getUrlAIGeneratedImageSelector(state),
  isAIAvatarGeneratedSucces: getIsAIAvatarGeneratedSucces(state),
  aVatarNotFoundMsg: getaVatarNotFoundMsgSelector(state)
});


export default compose(
  withAuthRedirect,
  connect<ProfileContainerWithHooksMapStatePropsType, ProfileContainerWithHooksMapDispatchPropsType, ProfileContainerWithHooksOwnPropsType, AppStateType>(mapStateToProps, { getProfile, getStatus, setStatus, upLoadAvatar, loadProfileData, setErrors, isloadProfileDataSuccess, getGeneratedPhoto, setAIAvatarGeneratedSucces: isSetAIAvatarGeneratedSucces}),
  withRouter
)(ProfileContainerWithHooks);

