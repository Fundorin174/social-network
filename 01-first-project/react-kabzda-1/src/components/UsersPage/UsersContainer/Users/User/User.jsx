import React from 'react';
import classes from './User.module.css';
import Avatar from './../../../../../../src/img/avatar.png';

const User = (props) => {
    return (
        <div className = {classes.user_wrapper}>
            <div className={classes.left_column}>
               <img className={classes.img} src={ props.smallPhotoSrc != null ? props.smallPhotoSrc : Avatar} alt={"avatar"}/>
               {
                   props.follow ? 
                   <button onClick = { () => {props.toUnfollow(props.id)}} className={classes.btn}>Отписаться</button> 
                   : 
                   <button onClick ={ () => {props.toFollow(props.id)}} className={classes.btn}>Подписаться</button>
               }
               {
                    props.isFrend ?
                   <button onClick = {() => { props.fromFriends (props.id)}} className={classes.btn}>Убрать из друзей </button> :
                   <button onClick = {() => { props.toFriends (props.id)}} className={classes.btn}>Добавить в друзья </button>
                }  
               
            </div>
            <div className={classes.right_column}>
                <div className={classes.row}>
                    <h4>{props.fullName}</h4>
                    <p>Какая то страна</p>
                </div>
                <div className={classes.row}>
                    <p>{props.status}</p>
                    <p>Какой то город</p>
                </div>
            </div>


        
       </div>
    );
}

export default User;