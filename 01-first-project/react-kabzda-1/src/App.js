import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route} from 'react-router-dom';





const App = (props) => {

  return (


  <div className='app-wrapper'>
      <Header />
      <Navbar data={props.state.navBar}/>
      <div className='app-wrapper-content'>
        <Route path='/profile' render={ () => <Profile data={props.state.profilePage} adPost={props.adPost} />}/>
        <Route path='/dialogs' render={ () => <Dialogs data={props.state.dialogPage} adMsg={props.adMsg} />}/>
        <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/settings' component={Settings}/>
      </div>
  </div>

  );
}






export default App;
