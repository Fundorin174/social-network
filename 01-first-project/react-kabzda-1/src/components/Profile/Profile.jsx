import React from 'react';
import classes from './Profile.module.css';
import Title from './Title/Title';
import PostsContainer from './Posts/PostsContainer';

const Profile = React.memo(props => {
    return (
      <div className={classes.content}>
        <Title
          formError={props.formError}
          loadProfileData = {props.loadProfileData}
          autorizedUserId={props.autorizedUserId}
          currentStatus={props.currentStatus}
          currentProfile={props.currentProfile}
          setStatus={props.setStatus}
          upLoadAvatar={props.upLoadAvatar}
          loadProfileDataSuccess={props.loadProfileDataSuccess}
          setErrors={props.setErrors}
          isloadProfileDataSuccess= {props.isloadProfileDataSuccess}
          getGeneratedPhoto = {props.getGeneratedPhoto}
          isFaceGeneratedAvatar = {props.isFaceGeneratedAvatar}
          urlAIGeneratedImage = {props.urlAIGeneratedImage}
          isAIAvatarGeneratedSucces={props.isAIAvatarGeneratedSucces}
          setAIAvatarGeneratedSucces = {props.setAIAvatarGeneratedSucces}
          aVatarNotFoundMsg = {props.aVatarNotFoundMsg}
          />
        <PostsContainer />
      </div>
    );
    });


export default Profile;

