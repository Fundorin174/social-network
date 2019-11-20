import React from 'react';
import classes from './DialogItem.module.css';
import {NavLink} from 'react-router-dom';
import Avatar from './../../../../img/avatar.png';

const DialogItem = (props) => {

    let path = '/dialogs/'+ props.id;
   
    return (
        <div className={classes.dialogContainer}>
            <div className={classes.dialogItem}>
            <div className={classes.dialImg}>
                <NavLink to={path} activeClassName={classes.active}><img src={Avatar} alt="avatar"/></NavLink>
            </div>
            <div className={classes.dialText}>
                <div className={classes.textTop}>
                    <span className={classes.dialName}>{props.name}</span>
                    <span className={classes.dialDate}>{props.date}</span>
                </div>
                <div className={classes.textMsg}>{props.msg}</div>
            </div>
            </div>
            <hr />   
        </div>
        
    );
}

export default DialogItem;