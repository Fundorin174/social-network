import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, getStatus } from './../../redux/profileReduser';
import {withRouter} from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';




class ProfileContainer extends React.Component {

  componentDidMount() {
    let userID = this.props.match.params.userID;
    this.props.getProfile(userID);
    this.props.getStatus(userID);
  }


    render() {
      
        return (
          <Profile {...this.props} currentStatus = {this.props.currentStatus} currentProfile={this.props.currentProfile}/>
        );

    }

}

let mapStateToProps = (state) => ({
  currentProfile: state.profilePage.currentProfile,
  currentStatus: state.profilePage.currentStatus
});


export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { getProfile, getStatus }),
  withRouter
  )(ProfileContainer);

