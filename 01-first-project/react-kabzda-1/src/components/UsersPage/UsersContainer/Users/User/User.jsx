import React from 'react';
import classes from './User.module.css';
import Avatar from './../../../../../../src/img/avatar.png';

const User = (props) => {
    console.log(props)


    return (
        <div className = {classes.user_wrapper}>
            <div className="left_column">
               <img src={Avatar} alt={"avatar"}/>
               <button>{props.follow === true ? 'Отписаться' : 'Подписаться'}</button> 
               <button>{props.isFrend === true ? 'Убрать из друзей' : 'Добавить в друзья'}</button>
            </div>
            <div className="right_column">
                <div className="row">
                    <h4>{props.fullName}</h4>
                    <p>{props.country}</p>
                </div>
                <div className="row">
                    <p>{props.status}</p>
                    <p>{props.city}</p>
                </div>
            </div>


        
       </div>
    );
}

export default User;