import React from 'react';
import {changeNumOfLikeCreator} from '../../../../redux/profileReduser'
import Post from './Post';
import StoreContext from '../../../../storeContext';


const PostContainer = (props) => {


    return (

        <StoreContext.Consumer>
            {
                (store) => 
                {
                    let state = store.getState();
                    let changeNumOfLike = (num, postId) => {
                    let action = changeNumOfLikeCreator(num, postId);
                    store.dispatch(action);
                    }
                
                
                    return <Post changeNumOfLike = {changeNumOfLike} msg={state.profilePage.posts.msg}
                    likeNum={state.profilePage.posts.numOfLikes}
                    id={state.profilePage.posts.id}/>
                }
            }

        </StoreContext.Consumer>
     );
}

export default PostContainer;