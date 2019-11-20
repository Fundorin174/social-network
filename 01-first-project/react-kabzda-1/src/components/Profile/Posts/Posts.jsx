import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post';


const Posts = () => {
    return(
    <div >
        <h3>My posts</h3>
        <div className={classes.newsform}>
          <textarea name={classes.youNews} id={classes.youNews} cols="30" rows="3" value='your news'></textarea>
          <button className={classes.btn}>Send</button>
        </div>
        <div>
          <Post msg = 'Hi' likeNum = '5'/>
          <Post msg = 'Yo' likeNum = '1'/>
          <Post msg = 'Fuck' likeNum = '200'/>
        </div>
    </div>);
    }

export default Posts;