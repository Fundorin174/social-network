import React from 'react';
import classes from './Profile.module.css';
import Title from './Title/Title';
import Posts from './Posts/Posts';

const Profile = (props) => {




    return(


    <div className={classes.content}>
      <Title />
      <Posts posts = {props.posts} />
    </div>);
    }


export default Profile;