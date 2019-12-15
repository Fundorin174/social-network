import React from 'react';
import Logo from './../../img/logo.png';
import classes from './Header.module.css';

const Header = () => {
    return(
        <header className={classes.header}>
        <img className={classes.img} src = {Logo} alt ={'logo'}/>
        </header> 
    );
}

export default Header;