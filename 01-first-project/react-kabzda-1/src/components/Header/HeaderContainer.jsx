import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {logout} from "./../../redux/authReduser";
import {getProfile, getStatus} from "../../redux/profileReduser";
import {getAllAuthDataSelector, getIsAuthSelector} from "../../redux/authSelectors";

class HeaderContainer extends React.Component {



  render() {

    return (
        <Header {...this.props} />
    );
  }
}

let mapStateToProps = (state) => ({
  data: getAllAuthDataSelector(state),
  isAuth: getIsAuthSelector(state)
});

export default connect(mapStateToProps, { logout, getProfile, getStatus })(HeaderContainer);