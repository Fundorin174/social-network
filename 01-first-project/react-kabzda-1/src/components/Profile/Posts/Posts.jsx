import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post';



const Posts = (props) => {


// console.log(props);
// let recieveData = [];
// {for  (let i = 0; i<props.idTag.length; i++ ){
//   recieveData[i] = {
//     'id': props.idTag[i],
//     'msg': props.msgTag[i],
//     'numOfLikes': props.numOfLikesTag[i]
//   }
//   }
//   console.log(recieveData);
//   }
// let postData = [
  
//   {id: '1', msg: 'Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', numOfLikes: '5'},
//   {id: '2', msg: 'Fuck', numOfLikes: '500'},
//   {id: '3', msg: 'Ахахахахахахах', numOfLikes: '50'},
//   {id: '3', msg: 'Ахахахаха', numOfLikes: '100'}
// ];



let postsElements = props.posts.map( (post) => <Post msg = {post.msg} likeNum = {post.numOfLikes}/> );
    return(
    <div >
        <h3>My posts</h3>
        <div className={classes.newsform}>
          <textarea name={classes.youNews} id={classes.youNews} cols="30" rows="3" value='your news'></textarea>
          <button className={classes.btn}>Send</button>
        </div>
        <div>

          { postsElements }

        </div>
    </div>);
    }

export default Posts;