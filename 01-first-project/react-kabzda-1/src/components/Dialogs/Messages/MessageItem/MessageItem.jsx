import React from 'react';
import classes from './MessageItem.module.css';
import {NavLink} from 'react-router-dom';
import Avatar from './../../../../img/avatar.png';

const MsgItem = (props) => {

    let path = '/messages/'+ props.id;
   
    return (
        <div className={classes.msgContainer}>
            <div className={classes.msgItem}>
            <div className={classes.msgImg}>
                <NavLink to={path} activeClassName={classes.active}><img src={Avatar} alt="avatar"/></NavLink>
            </div>
            <div className={classes.msgText}>
                <div className={classes.textTop}>
                    <span className={classes.msgName}>{props.name}</span>
                    <span className={classes.msgDate}>{props.date}</span>
                </div>
                <div className={classes.textMsg}>{props.msg}</div>
            </div>
            </div>
            <hr />   
        </div>
        
    );
}

export default MsgItem;