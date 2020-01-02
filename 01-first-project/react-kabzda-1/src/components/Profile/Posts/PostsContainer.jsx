import React from 'react';
import Posts from './Posts';
import {changeNumOfLike, addPost, changeText} from '../../../redux/profileReduser';
import {connect} from 'react-redux';
// import StoreContext from '../../../storeContext';

let mapStateToProps = (state) => {
    return {posts: state.profilePage.posts, newPostText: state.profilePage.newPostText}

}


const PostsContainer = connect(mapStateToProps, {
    addPost, changeText, changeNumOfLike
})(Posts);

export default PostsContainer;