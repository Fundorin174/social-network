import React from 'react';
import Logo from './../../img/logo.png';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    return(
        <header className={classes.header}>
        <img className={classes.img} src = {Logo} alt ={'logo'}/>
        {
          !props.isAuth ? <NavLink to= {'/login'} className={classes.login}>Авторизуйтесь</NavLink> : <div className={classes.login}>{props.data.login}</div> 
        }
        </header> 
    );
}

export default Header;