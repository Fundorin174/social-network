import React from 'react';
import classes from './Title.module.css';
import topImg from './../../../img/topImg.jpg';
import myAva from './../../../img/myAva.jpg';

const Title = () => {
    return(
    <div className={classes.content}>
      <div className={classes.topimg}>
        <img src={topImg} alt={"top-img"} />
      </div>
      <div className={classes.avadescription}>
        <div className={classes.avatar}>
          <img src={myAva} alt={"my-ava"} />
        </div>
        <div className={classes.description}>
          <h3>Dmitry</h3>
          <p>
            <ul>
              <li>Date of Birth: 2 january</li>
              <li>City: Voronezh</li>
              <li>Education: VVTU'02</li>
              <li>Web Site: https://fundorin.ru</li>
            </ul>
          </p>
        </div>
      </div>
    </div>);
    }

export default Title;