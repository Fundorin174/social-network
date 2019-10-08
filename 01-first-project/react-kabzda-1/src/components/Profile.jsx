import React from 'react';
import classes from './Profile.module.css';
import topImg from './../img/topImg.jpg';
import myAva from './../img/myAva.jpg';
import Avatar from './../img/avatar.png';

const Profile = () => {
    return(
<div className={classes.content}>
    <div className={classes.topimg}>
    <img src = {topImg} alt ={"top-img"}/>
    </div>
    <div className={classes.avadescription}>
      <div className = {classes.avatar}>
        <img src={myAva} alt={"my-ava"}/>
      </div>
      <div className={classes.description}>
        <h3>Name</h3>
        <p><ul>
          <li>Date of Birth: 2 january</li>
          <li>City: Voronezh</li>
          <li>Education: VVTU'02</li>
          <li>Web Site: https://fundorin.ru</li>
        </ul></p>
      </div>
    </div>
    <div>
      <h3>My posts</h3>
      <div className={classes.newsform}>
        <textarea name={classes.youNews} id={classes.youNews} cols="30" rows="3" value = 'your news'></textarea>
        <button className={classes.btn}>Send</button>
      </div>
      <div> 
        <div className={classes.post}>
        <img src = {Avatar} alt ={"avatar"}/>
          <p className={classes.item}>Hey? why nobody love me?</p>
          </div>
        <div className = {classes.post}>
          <img src = {Avatar} alt ={"avatar"}/>
          <p className={classes.item}>It's our new program! Hey!</p></div>
      </div>
    </div>
</div>
    );
}

export default Profile;