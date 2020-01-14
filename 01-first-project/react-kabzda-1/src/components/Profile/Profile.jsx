import React from 'react';
import classes from './Profile.module.css';
import Title from './Title/Title';
import PostsContainer from './Posts/PostsContainer';

const Profile = (props) => {

    return(
     

    <div className={classes.content}>
      <Title currentStatus = {props.currentStatus} currentProfile = {props.currentProfile} setStatus = {props.setStatus}/>
      <PostsContainer /> 
    </div>);
    }


export default Profile;

