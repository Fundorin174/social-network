import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import UsersContainer from './components/UsersPage/UsersContainer/UsersContainer';
// import News from './components/News/News';
// import Music from './components/Music/Music';
// import Settings from './components/Settings/Settings';
import {Route} from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';





const App = (props) => {

  return (

  <div className='app-wrapper'>

      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile/:userID?' render={ () => <ProfileContainer />}/>
        <Route path='/dialogs' render={ () => <Dialogs />}/>
        <Route path='/users' render={ () => <UsersContainer />}/>
        {/* <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/settings' component={Settings}/> */}
      </div>
  </div>

  );
}






export default App;
