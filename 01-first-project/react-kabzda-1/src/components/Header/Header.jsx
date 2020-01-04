import React from 'react';
import Logo from './../../img/logo.png';
import classes from './Header.module.css';

const Header = (props) => {

    return(
        <header className={classes.header}>
        <img className={classes.img} src = {Logo} alt ={'logo'}/>
        {
          !props.isAuth ? <div className={classes.login}>Авторизуйтесь</div> : <div className={classes.login}>{props.data.login}</div> 
        }
        </header> 
    );
}

export default Header;