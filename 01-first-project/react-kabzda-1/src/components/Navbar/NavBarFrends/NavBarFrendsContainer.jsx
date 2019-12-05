import React from 'react';
import classes from './NavBarFrends.module.css';
import NavbarFriends from './NavBarFrends';
import StoreContext from './../../../storeContext';



const NavbarFriendsContainer  = (props) => {
  
    return (

<StoreContext.Consumer>
            {
                (store) => 
                {
                    let state = store.getState();
                    

                    return <NavbarFriends frends = {state.navBar.frends}/>



                }
            }
</StoreContext.Consumer>





);
}

export default NavbarFriendsContainer;