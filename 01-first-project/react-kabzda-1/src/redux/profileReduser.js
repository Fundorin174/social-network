import React from 'react';
import {profileAPI, generatedFotoAPI} from './../DAL/api';
import {isloading} from './userReduser';
import {reset} from 'redux-form';


const AD_POST = 'SOCIAL-NETWORK/PROFILE/AD-POST',
    CHANGE_NEW_POST_TEXT = 'SOCIAL-NETWORK/PROFILE/CHANGE-NEW-POST-TEXT',
    CHANGE_NUM_OF_LIKE = 'SOCIAL-NETWORK/PROFILE/CHANGE_NUM_OF_LIKE',
    SET_USER_PROFILE = 'SOCIAL-NETWORK/PROFILE/SET_USER_PROFILE',
    UPLOAD_AVATAR_SUCCESS = 'SOCIAL-NETWORK/PROFILE/UPLOAD_AVATAR_SUCCESS',
    SET_USER_STATUS = 'SOCIAL-NETWORK/PROFILE/SET_USER_STATUS',
    SET_PROFILESET_ERRORS = 'SOCIAL-NETWORK/PROFILE/SET_PROFILESET_ERRORS',
    LOAD_PROFILE_DATA_SUCCESS = 'SOCIAL-NETWORK/PROFILE/LOAD_PROFILE_DATA_SUCCESS',
    SET_AI_GENERATED_PHOTO = 'SOCIAL-NETWORK/PROFILE/SET_AI_GENERATED_PHOTO',
    AI_AVATAR_GENERATED_SUCCESS = 'SOCIAL-NETWORK/PROFILE/AI_AVATAR_GENERATED_SUCCESS';

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

export const upLoadAvatarSuccess = (data) => ({
  type: UPLOAD_AVATAR_SUCCESS,
  data
});

export const setAIGeneretedPhoto = (data) => ({
  type: SET_AI_GENERATED_PHOTO,
  data
});

export const isloadProfileDataSuccess = (result) => ({
  type: LOAD_PROFILE_DATA_SUCCESS,
  result: result
})

export const setAIAvatarGeneratedSucces = (state, msg) => ({
  type: AI_AVATAR_GENERATED_SUCCESS,
  state: state,
  msg: msg
})

export const setErrors = (errors) => ({type: SET_PROFILESET_ERRORS, errors});




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
    currentStatus: '',
    profileSetErrors: [],
    loadProfileDataSuccess: false,
    generatedFaces: 
      {faces:[
        {id:"5e01137a7b1b300007f72ab3",
        urls:[
          {32:"https://images.generated.photos/cDyfGeFdum82G-BvxZwK_7AgiaLlERHm6yZp7oV9X94/rs:fit:32:32/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA5Nzk2OTQuanBn.jpg"},{64:"https://images.generated.photos/eK4R66p9K7vqQSgm0GcIYu1NeNJiVhQH-yP0ayt2p-Y/rs:fit:64:64/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA5Nzk2OTQuanBn.jpg"},{128:"https://images.generated.photos/soqUR--DY0fPpUCXpMulYND_ZZgF1Sv91GrMlFTBo4Y/rs:fit:128:128/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA5Nzk2OTQuanBn.jpg"},{256:"https://images.generated.photos/cv5ccGtHNqHww2wZT5v4ePCsvqo-6-VklAwfKbcsRSA/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA5Nzk2OTQuanBn.jpg"},{512:"https://images.generated.photos/idbUf1EgZqu9sXfynX08FXUQ5JHuBmF3bK3AH2emqPI/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA5Nzk2OTQuanBn.jpg"}],
        meta:{
          confidence:0.000888282957021147,
          gender:["male"],
          age:["young-adult"],
          ethnicity:["white"],
          eye_color:["blue"],
          hair_color:["blond"],
          hair_length:["medium"],
          emotion:["joy"]
          }
      }],
      total:6
    },
    isFaceGeneratedAvatar: false,
    isAIAvatarGeneratedSucces: true,
    aVatarNotFoundMsg: ''

};

export const getProfile = (userID) => async (dispatch) => {
  dispatch(isloading(true));
  let data = await profileAPI.getProfile(userID)
      dispatch(setUserProfile(data));
      dispatch(isloading(false));
};


export const loadProfileData = (profile) => async (dispatch, getState) => {
  dispatch(isloading(true));
  let data = await profileAPI.setProfile(profile);
  let userID = getState().auth.id;
  if (data.resultCode === 0)
  {
   dispatch(getProfile(userID));
  dispatch(isloadProfileDataSuccess(true));
  } 
  else {
    dispatch(setErrors(data.messages));
      dispatch(isloadProfileDataSuccess(false));
  }
  dispatch(isloading(false));
};


export const getStatus = (userID) => async (dispatch) => {
  dispatch(isloading(true));
  let data = await profileAPI.getStatus(userID);
      dispatch(setUserStatus(data));
      dispatch(isloading(false));
};

export const setStatus = (status) => async (dispatch) => {
  dispatch(isloading(true));
  let data = await profileAPI.setStatus(status);
      data.resultCode === 0 ? dispatch(setUserStatus(status)) : console.log(data.message);
      dispatch(isloading(false));
};

export const upLoadAvatar = (avatar) => async (dispatch) => {
  dispatch(isloading(true));
  let data = await profileAPI.upLoadAvatar(avatar);
      data.resultCode === 0 ? dispatch(upLoadAvatarSuccess(data.data.photos)) : console.log(data.message);
      dispatch(isloading(false));
};

export const getGeneratedPhoto = (faceParams, page, per_page, order_by) => async (dispatch) => {
  dispatch(isloading(true));
  let data = await generatedFotoAPI.getGeneratedPhoto(faceParams, page, per_page, order_by);
    if (data.total === 0) {
      dispatch(setAIAvatarGeneratedSucces(false, 'Изображения с выбранными параметрами отсутствуют в базе. Поменяйте условия'));
    } else {
      dispatch(setAIGeneretedPhoto(data));
      dispatch(setAIAvatarGeneratedSucces(true, ''));
     dispatch(isloading(false));
    }
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
        
        case SET_AI_GENERATED_PHOTO:
            return {...state, 
                    generatedFaces: action.data, 
                    isFaceGeneratedAvatar: true};
 
        case LOAD_PROFILE_DATA_SUCCESS:
            return {...state, loadProfileDataSuccess: action.result};
        
            case AI_AVATAR_GENERATED_SUCCESS:
            return {...state, isAIAvatarGeneratedSucces: action.state, 
            aVatarNotFoundMsg: action.msg};

        case UPLOAD_AVATAR_SUCCESS:
          return {
            ...state,
            currentProfile: {...state.currentProfile, photos: action.data}
            }
  
        case SET_USER_STATUS:
                return {...state, currentStatus: action.status};
        
        case SET_PROFILESET_ERRORS:
        return {
          ...state,
          profileSetErrors: action.errors
        };

        default:
            return state;

    }
}

export default profileReducer;