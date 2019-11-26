import React from 'react';
import classes from './Profile.module.css';
import Title from './Title/Title';
import Posts from './Posts/Posts';

const Profile = (props) => {


    return(


    <div className={classes.content}>
      <Title />
      <Posts posts = {props.data.posts} newPostText={props.data.newPostText} dispatch={props.dispatch} /> 
    </div>);
    }


export default Profile;