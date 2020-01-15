import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { letAuth, logout } from "./../../redux/authReduser";

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.letAuth()
  }

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

export default connect(mapStateToProps, { letAuth, logout })(HeaderContainer);