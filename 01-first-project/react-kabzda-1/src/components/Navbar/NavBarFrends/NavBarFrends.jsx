import React from 'react';
import classes from './NavBarFrends.module.css';
import FrendContainer from './frend/FrendContainer';




const NavbarFriends = (props) => {
  let allFriends = props.frends.map( frend => <FrendContainer key = {frend.id}/>);
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