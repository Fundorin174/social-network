import React from 'react';
import Logo from './../../img/logo.png';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

  let toMyPage = () => {
    let userID = props.data.id;
      props.getProfile(userID);
      props.getStatus(userID);
  }

    return(
        <header className={classes.header}>
        <img className={classes.img} src = {Logo} alt ={'logo'}/>
        {
          !props.isAuth 
          ? 
          <NavLink to= {'/login'} className={classes.login}>Авторизуйтесь</NavLink> 
          : 
            <div className={classes.iflogin}>
              <NavLink onClick = { () => toMyPage()} to= {'/profile/' + props.data.id} className={classes.login}>{props.data.login}</NavLink>
              <div onClick={ props.logout} className={classes.login + ' ' + classes.out}> <NavLink to={'/login'}>{'Выйти'}</NavLink> </div>
              
            </div> 
        }
        </header> 
    );
}

export default Header;