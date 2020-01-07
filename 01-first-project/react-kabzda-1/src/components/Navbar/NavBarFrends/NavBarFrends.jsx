import React from 'react';
import classes from './NavBarFrends.module.css';
import Frend from './frend/Frend';




const NavbarFriends = (props) => {
  let allFriends = props.frends.map( frend => <Frend key = {frend.id} name = {frend.name}/>);
    return (
<div className={classes.frends_wrapper}>
  <div className={classes.title}>Друзья</div>
  <div className={classes.frends_items}>

  
      { allFriends }

  </div>
</div>




);
}

export default NavbarFriends;