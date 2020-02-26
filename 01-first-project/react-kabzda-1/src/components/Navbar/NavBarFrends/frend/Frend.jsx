import React from 'react';
import classes from './Frend.module.css';
import avatar from './../../../../img/avatar.png';


const Frend = (props) => {
  let name = props.name.slice(0, 10)

    return (
    <div className={classes.frends_item}>
        <img src={props.photo != null ? props.photo : props.urlAIGeneratedImage ? props.urlAIGeneratedImage : avatar}
          alt={"avatar"}/>
        <p>{name}</p>
        <button className={classes.btn} onClick={()=>{props.deleteFromFrends(props.id)}}>Удалить</button>
      
    </div>

  


);
}

export default Frend;