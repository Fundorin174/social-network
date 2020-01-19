import React from 'react';
import Post from './Post/Post';
import FormProfileNewMsg from './FormProfileNewMsg';


const Posts = (props) => {

    let addNewPost = values => {
       props.addPost(values.someNewPost);
      props.resetForm(FormProfileNewMsg.defaultProps.form);

    };


    let postsElements = props
        .posts
        .map(
            postitem => <Post
                key={postitem.id}
                changeNumOfLike={props.changeNumOfLike}
                msg={postitem.msg}
                likeNum={postitem.numOfLikes}
                id={postitem.id}/>
        );

    return (
      <div>
        <h3>Мои сообщения</h3>
        <FormProfileNewMsg onSubmit={addNewPost} />
        <div>{postsElements}</div>
      </div>
    );
}

export default Posts;