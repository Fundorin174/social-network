import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setUserProfile} from './../../redux/profileReduser';
import {isloading} from './../../redux/userReduser';
import {withRouter} from 'react-router-dom';



class ProfileContainer extends React.Component {

  componentDidMount() {
    this
      .props
      .isloading(true);
    let userID = this.props.match.params.userID
    if (!userID) {
      userID = 5585;
    }
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/`+ userID)
      .then(response => {
        this
          .props
          .setUserProfile(response.data);
        this
          .props
          .isloading(false);
      });
  }



    render() {


        return (
          <Profile {...this.props} currentProfile={this.props.currentProfile}/>
        );

    }

}

let mapStateToProps = (state) => ({
  currentProfile: state.profilePage.currentProfile
});

let WithRouterComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile, isloading}) (WithRouterComponent);
