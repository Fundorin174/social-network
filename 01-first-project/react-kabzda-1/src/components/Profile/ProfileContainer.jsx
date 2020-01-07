import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile } from './../../redux/profileReduser';
import {withRouter} from 'react-router-dom';




class ProfileContainer extends React.Component {

  componentDidMount() {
    let userID = this.props.match.params.userID;
    this.props.getProfile(userID);
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
export default connect(mapStateToProps, {getProfile}) (WithRouterComponent);
