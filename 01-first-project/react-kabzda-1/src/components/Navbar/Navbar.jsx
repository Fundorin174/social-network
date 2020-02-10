import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import NavbarFriendsContainer from './NavBarFrends/NavBarFrendsContainer';


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
    <NavLink to='/users'activeClassName={classes.active}>Пользователи</NavLink>
  </div>
  <div className={classes.item}>
    <NavLink to='/todolist'activeClassName={classes.active}>Ежедневник</NavLink>
  </div>
</nav>
 <NavbarFriendsContainer />;

 </div>



);
}

export default Navbar;