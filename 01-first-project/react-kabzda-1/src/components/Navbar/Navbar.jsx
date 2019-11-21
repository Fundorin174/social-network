import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import NavbarFriends from './NavBarFrends/NavBarFrends';


const Navbar = (props) => {
    return (
<div className={classes.wrapper}>
<nav className={classes.nav}>
  <div className={classes.item}>
    <NavLink to='/profile'activeClassName={classes.active}>Профиль</NavLink>
  </div>
  <div className={classes.item}>
    <NavLink to='/dialogs'activeClassName={classes.active}>Сообщения</NavLink>
  </div>
  <div className={classes.item}>
    <NavLink to='/news'activeClassName={classes.active}>Новости</NavLink>
  </div>
  <div className={classes.item}>
    <NavLink to='/music'activeClassName={classes.active}>Музыка</NavLink>
  </div>
  <div className={classes.item}>
    <NavLink to='/settings'activeClassName={classes.active}>Настройки</NavLink>
  </div>
</nav>
 <NavbarFriends data={props.data} />;

 </div>



);
}

export default Navbar;