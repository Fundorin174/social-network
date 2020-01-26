import {profileAPI} from './../DAL/api';
import {isloading} from './userReduser';
import {reset} from 'redux-form';

const AD_POST = 'AD-POST',
    CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT',
    CHANGE_NUM_OF_LIKE = 'CHANGE_NUM_OF_LIKE',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_USER_STATUS = 'SET_USER_STATUS';
    // CHANGE_USER_STATUS = 'CHANGE_USER_STATUS';

export const addPost = (text) => (
    {type: AD_POST, someNewPost: text}
);


export const changeNumOfLike = (num, postId) => (
    {type: CHANGE_NUM_OF_LIKE, newNumOfLikes: num, id: postId}
);

export const setUserProfile = (currentProfile) => (
    {type: SET_USER_PROFILE, currentProfile}
);

export const setUserStatus = (status) => (
  {type: SET_USER_STATUS, status}
);




let initialState = {
  posts: [{
    id: '1',
    msg: 'И снова здрасте-)',
    numOfLikes: 0
  }, {
      id: '2',
      msg: 'Привет, народ!)',
      numOfLikes: 0
    }],
    currentProfile: null,
    newPostText: '',
    newNumOfLikes: '',
    currentStatus: ''
};

export const getProfile = (userID) => (dispatch) => {
  dispatch(isloading(true));
  profileAPI.getProfile(userID)
    .then(data => {
      dispatch(setUserProfile(data));
      dispatch(isloading(false));
      // console.log(data);
    });
};

export const getStatus = (userID = 5585) => (dispatch) => {
  dispatch(isloading(true));
  profileAPI.getStatus(userID)
    .then(data => {
      dispatch(setUserStatus(data));
      dispatch(isloading(false));
    });

};

export const setStatus = (status) => (dispatch) => {
  dispatch(isloading(true));
  profileAPI.setStatus(status)
    .then(data => {
      data.resultCode === 0 ? dispatch(setUserStatus(status)) : console.log(data.message);
      dispatch(isloading(false));
    });

};

export const resetForm = (formName) => (dispatch) => {
  dispatch(reset(formName));
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case AD_POST:
            let newItem = {
                id: (1),
                msg: action.someNewPost,
                numOfLikes: 0
            };

        let newposts = [
          ...state.posts
        ]
        newposts.map(post => {
          post.id++; 
        })
        newposts.unshift(newItem);
            return {
                ...state,
                posts: newposts,
                newPostText: ''
            }

            
        case CHANGE_NEW_POST_TEXT:

            return {
                ...state,
                newPostText: action.newAddedPost
            }

            

        case CHANGE_NUM_OF_LIKE:

            let stateCopy = {
                ...state,
                posts: [...state.posts],
                newNumOfLikes: action.newNumOfLikes + 1
            }
            

            for (let i = 0; i < stateCopy.posts.length; i++) {
                stateCopy.posts[i] = {
                    ...state.posts[i]
                };
            }
            stateCopy
                .posts[action.id - 1]
                .numOfLikes = action.newNumOfLikes;
            return stateCopy;

        case SET_USER_PROFILE:
            return {...state, currentProfile: action.currentProfile};
  
        case SET_USER_STATUS:
                return {...state, currentStatus: action.status};

        default:
            return state;

    }
}

export default profileReducer;