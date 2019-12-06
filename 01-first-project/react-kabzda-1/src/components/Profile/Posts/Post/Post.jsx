import React from 'react';
import classes from './../Post/Post.module.css';
import Avatar from './../../../../img/avatar.png';
import Like from './../../../../img/like.png';


const Post = (props) => {

    let changeNumOfLike = () => {

        let num = props.likeNum + 1;
        let postId = props.id;
        props.changeNumOfLike(num, postId);
    }

    return (

        <div>
            <div className={classes.post}>
                <img className={classes.ava} src={Avatar} alt={"avatar"}/>
                <p className={classes.item}>{props.msg}</p>
            </div>
            <div className={classes.postLikes}>
                <img
                    onClick={changeNumOfLike}
                    className={classes.like}
                    src={Like}
                    alt={"Like"}/>
                <span className={classes.likeNum}>{props.likeNum}</span>
            </div>
        </div>
    );
}

export default Post;