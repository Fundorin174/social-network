import React from 'react';
import classes from './User.module.css';
import Avatar from './../../../../../../src/img/avatar.png';

const User = (props) => {
    return (
        <div>
        <img src={Avatar} alt=""/> {props.users.ava} Я юзверь 
       </div>
    );
}

export default User;