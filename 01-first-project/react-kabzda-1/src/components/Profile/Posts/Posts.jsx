import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, changeTextActionCreator} from './../../../redux/profileReduser';

const Posts = (props) => {

    let newPostElement = React.createRef();

    let addNewPost = () => {
        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator(text));
    }

    let addNewText = () => {
        let text = newPostElement.current.value,
            action = changeTextActionCreator(text);
            props.dispatch(action);

    }

    let postsElements = props
        .posts
        .map(
            post => <Post
                msg={post.msg}
                likeNum={post.numOfLikes}
                id={post.id}
                dispatch={props.dispatch}/>
        );

    return (

        <div >
            <h3>Мои сообщения</h3>
            <div className={classes.newsform}>
                <textarea
                    onChange={addNewText}
                    value={props.newPostText}
                    ref={newPostElement}
                    name={classes.youNews}
                    id={classes.youNews}
                    cols="30"
                    rows="3"
                    placeholder='Введите сообщение'/>
                <button onClick={addNewPost} className={classes.btn}>Добавить сообщение</button>
            </div>
            <div>

                {postsElements}

            </div>
        </div>
    );
}

export default Posts;