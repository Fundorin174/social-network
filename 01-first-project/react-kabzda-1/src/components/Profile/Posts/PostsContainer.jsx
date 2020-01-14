import React from 'react';
import Posts from './Posts';
import {
  changeNumOfLike,
  addPost,
  resetForm
} from "../../../redux/profileReduser";
import {connect} from 'react-redux';
// import StoreContext from '../../../storeContext';

let mapStateToProps = (state) => {
    return {posts: state.profilePage.posts}

}


const PostsContainer = connect(mapStateToProps, {
  addPost,
  changeNumOfLike,
  resetForm
})(Posts);

export default PostsContainer;