import React from 'react';
import Posts from './Posts';
import {
  changeNumOfLike,
  addPost,
  resetForm
} from "../../../redux/profileReduser";
import {connect} from 'react-redux';
import {getPostsSelector, getCurrentProfileSelector} from "../../../redux/profileSelectors";
import { getAutorizedUserIdSelector } from "../../../redux/authSelectors";
// import StoreContext from '../../../storeContext';

let mapStateToProps = (state) => {
    return {
      posts: getPostsSelector(state),
      currentProfile: getCurrentProfileSelector(state),
      autorizedUserId: getAutorizedUserIdSelector(state)
    };

}


const PostsContainer = connect(mapStateToProps, {
  addPost,
  changeNumOfLike,
  resetForm
})(Posts);

export default PostsContainer;