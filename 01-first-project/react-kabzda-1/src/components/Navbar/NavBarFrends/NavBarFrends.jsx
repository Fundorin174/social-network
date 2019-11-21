import React from 'react';
import classes from './NavBarFrends.module.css';
import Friend from './frend/Frend';


const NavbarFriends = (props) => {
  let allFriends = props.data.frends.map( frend => <Friend name={frend.name} />);
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