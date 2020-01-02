import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setUserProfile} from './../../redux/profileReduser';



class ProfileContainer extends React.Component {

  componentDidMount() {
    // this
    //   .props
    //   .isloading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/15`)
      .then(response => {
        this
          .props
          .setUserProfile(response.data);

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
export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);
