import React from 'react';
import classes from './Profile.module.css';
import Title from './Title/Title';
import Posts from './Posts/Posts';

const Profile = (props) => {


    return(


    <div className={classes.content}>
      <Title />
      <Posts posts = {props.data.posts} newPostText={props.data.newPostText} adPost={props.adPost} changeNewPostText={props.changeNewPostText}/>
    </div>);
    }


export default Profile;