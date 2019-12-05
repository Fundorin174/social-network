import React from 'react';
import classes from './Profile.module.css';
import Title from './Title/Title';
import PostsContainer from './Posts/PostsContainer';

const Profile = (props) => {


    return(


    <div className={classes.content}>
      <Title />
      <PostsContainer /> 
    </div>);
    }


export default Profile;


// posts = {props.data.posts} newPostText={props.data.newPostText} dispatch={props.dispatch}