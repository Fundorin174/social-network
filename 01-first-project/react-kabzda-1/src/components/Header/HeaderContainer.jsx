import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { authMe } from './../../redux/authReduser';

class HeaderContainer extends React.Component {

  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/auth/me`, {
          withCredentials: true
        })
      .then(response => {
        if (response.data.resultCode === 0) {
          this
            .props
            .authMe(response.data);
        }
      });

  }

  render() {

    return (
        <Header {...this.props} />
    );
  }
}

let mapStateToProps = (state) => ({
  data: state.auth.data,
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { authMe })(HeaderContainer);