import React from 'react';
import classes from './User.module.css';
import Avatar from './../../../../../../src/img/avatar.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import {usersAPI} from '../../../../../DAL/api';
const User = (props) => {
    return (
        <div className = {classes.user_wrapper}>
            <div className={classes.left_column}>
              <NavLink to={'/profile/' + props.id}>
               <img className={classes.img} src={ props.smallPhotoSrc != null ? props.smallPhotoSrc : Avatar} alt={"avatar"}/>
              </NavLink>
               {
                   props.followed ? 
                   < button onClick = {
                     () => {
                       usersAPI.unFollow(props.id)
                         .then(data => {
                           if (data.resultCode == 0) {
                             props.toUnfollow(props.id)
                           }
                         });
                     }
                   }
                   className = {classes.btn}> Отписаться </button> 
                   : 
              < button onClick = {
                  () => {
                    usersAPI
                      .toFollow(props.id)
                      .then(data => {
                        if (data.resultCode == 0) {
                          props.toFollow(props.id)
                        }
                      });
                  }
                   } className={classes.btn}>Подписаться</button>
               }
               {
                    props.isFrend ?
                   <button onClick = {() => {props.fromFriends (props.id)}} className={classes.btn}>Убрать из друзей </button> :
                   <button onClick = {() => { props.toFriends (props.id)}} className={classes.btn}>Добавить в друзья </button>
                }  
               
            </div>
            <div className={classes.right_column}>
                <div className={classes.row}>
                    <NavLink to={'/profile/' + props.id}>
                    <h4>{props.fullName}</h4>
                    </NavLink>
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