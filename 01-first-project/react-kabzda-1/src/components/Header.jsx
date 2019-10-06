import React from 'react';
import Logo from './../img/logo.png';

const Header = () => {
    return(
        <header className='header'>
        <img src = {Logo} alt ={'logo'}/>
      </header> 
    );
}

export default Header;