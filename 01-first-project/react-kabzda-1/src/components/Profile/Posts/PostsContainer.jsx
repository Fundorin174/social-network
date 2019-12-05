import React from 'react';
import Posts from './Posts';
import {addPostActionCreator, changeTextActionCreator} from '../../../redux/profileReduser';
import StoreContext from '../../../storeContext';


const PostsContainer = (props) => {

        // msg={post.msg}
        // likeNum={post.numOfLikes}
        // id={post.id}
        // dispatch={props.dispatch}

    return (

        <StoreContext.Consumer>
            {
                (store) => 
                {
                    let state = store.getState();
                    let addNewPost = (text) => {
                        let action = addPostActionCreator(text);
                        store.dispatch(action);
                    }

                    let addNewText = (text) => {
                        let action = changeTextActionCreator(text);
                        store.dispatch(action);
                    }


                    return <Posts addNewPost = {addNewPost} addNewText = {addNewText} posts = {state.profilePage.posts} newPostText = {state.profilePage.newPostText}/>



                }
            }
        </StoreContext.Consumer>

    );
}

export default PostsContainer;