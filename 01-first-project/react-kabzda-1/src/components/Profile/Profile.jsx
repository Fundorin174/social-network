import React from 'react';
import classes from './Profile.module.css';
import Title from './Title/Title';
import Posts from './Posts/Posts';

const Profile = () => {
    return(
    <div className={classes.content}>
      <Title />
      <Posts />
    </div>);
    }

export default Profile;