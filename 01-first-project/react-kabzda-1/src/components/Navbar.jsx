import React from 'react';

const Navbar = () => {
    return(
<nav className='nav'>
  <div className='nav-item'>
    <a>Profile</a>
  </div>
  <div className='nav-item'>
    <a>Messages</a>
  </div>
  <div className='nav-item'>
    <a>News</a>
  </div>
  <div className='nav-item'>
    <a>Music</a>
  </div>
  <div className='nav-item'>
    <a>Settings</a>
  </div>
</nav>
    );
}

export default Navbar;