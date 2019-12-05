import React from 'react';
import classes from './Frend.module.css';
import avatar from './../../../../img/avatar.png';

const Frend = (props) => {
    return (
    <div className={classes.frends_item}>
      <img src={avatar} alt="Avatar"/>
      <p>{props.name}</p>
      
    </div>

  


);
}

export default Frend;