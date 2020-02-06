import React, {useEffect} from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {
  getProfile,
  getStatus,
  setStatus,
  upLoadAvatar,
  loadProfileData
} from "./../../redux/profileReduser";
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {getCurrentProfileSelector, getCurrentStatusSelector} from "../../redux/profileSelectors";
import {getAutorizedUserIdSelector, getIsAuthSelector} from "../../redux/authSelectors";


const ProfileContainerWithHooks = React.memo(props => {

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
      <Profile {...props} currentStatus = {props.currentStatus} currentProfile={props.currentProfile} setStatus = {props.setStatus}/>
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

let mapStateToProps = (state) => ({
  currentProfile: getCurrentProfileSelector(state),
  currentStatus: getCurrentStatusSelector(state),
  isAuth: getIsAuthSelector(state),
  autorizedUserId: getAutorizedUserIdSelector(state)
});


export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { getProfile, getStatus, setStatus, upLoadAvatar, loadProfileData }),
  withRouter
)(ProfileContainerWithHooks);

