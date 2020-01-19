import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {logout} from "./../../redux/authReduser";

class HeaderContainer extends React.Component {



  render() {

    return (
        <Header {...this.props} />
    );
  }
}

let mapStateToProps = (state) => ({
  data: state.auth,
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { logout })(HeaderContainer);