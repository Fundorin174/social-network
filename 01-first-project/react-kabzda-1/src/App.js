import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import DialogsMainContainer from './components/Dialogs/DialogsMainContainer';
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReduser";
import Preloader from "./components/common/Preloader/Preloader";
import {getIsAuthSelector} from "./redux/authSelectors";
import {withSuspensComponent} from './hoc/withSuspens';
const Login = React.lazy(() => import('./components/LoginPage/Login'));
const UsersContainer = React.lazy(() => import('./components/UsersPage/UsersContainer/UsersContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized){
      return (<Preloader />)
    }
    return (
      <div className='app-wrapper'>

        <HeaderContainer/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/profile/:userID?' render={() => <ProfileContainer />}/>
          <Route path='/dialogs' render={() => <DialogsMainContainer />}/>
          < Route path = '/users'
          render = {withSuspensComponent(UsersContainer)}/>
          <Route path='/login' render={withSuspensComponent(Login)}/>
        </div>;
      </div>
    )
  }
}
let mapStateToProps = (state) => ({
  isAuth: getIsAuthSelector(state),
  initialized: state.app.initialized
});

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}) )(App);
