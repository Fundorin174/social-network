import React from 'react';
import Posts from './Posts';
import {changeNumOfLikeCreator, addPostActionCreator, changeTextActionCreator} from '../../../redux/profileReduser';
import {connect} from 'react-redux';
// import StoreContext from '../../../storeContext';

let mapStateToProps = (state) => {
    return {posts: state.profilePage.posts, newPostText: state.profilePage.newPostText}

}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (text) => {
            let action = addPostActionCreator(text);
            dispatch(action);
        },

        addNewText: (text) => {
            let action = changeTextActionCreator(text);
            dispatch(action);
        },

        changeNumOfLike: (num, postId) => {
            let action = changeNumOfLikeCreator(num, postId);
            dispatch(action);
        }
    }

}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;