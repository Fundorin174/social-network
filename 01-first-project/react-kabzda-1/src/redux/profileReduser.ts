import { ProfileType, PhotosType, AIGeneratedFacesType } from './../types/types';
import React from 'react';
import {profileAPI, generatedFotoAPI} from '../DAL/api';
import {isloading} from './userReduser';
import {reset} from 'redux-form';


const AD_POST = 'SOCIAL-NETWORK/PROFILE/AD-POST',
    CHANGE_NUM_OF_LIKE = 'SOCIAL-NETWORK/PROFILE/CHANGE_NUM_OF_LIKE',
    SET_USER_PROFILE = 'SOCIAL-NETWORK/PROFILE/SET_USER_PROFILE',
    UPLOAD_AVATAR_SUCCESS = 'SOCIAL-NETWORK/PROFILE/UPLOAD_AVATAR_SUCCESS',
    SET_USER_STATUS = 'SOCIAL-NETWORK/PROFILE/SET_USER_STATUS',
    SET_PROFILESET_ERRORS = 'SOCIAL-NETWORK/PROFILE/SET_PROFILESET_ERRORS',
    LOAD_PROFILE_DATA_SUCCESS = 'SOCIAL-NETWORK/PROFILE/LOAD_PROFILE_DATA_SUCCESS',
    SET_AI_GENERATED_PHOTO = 'SOCIAL-NETWORK/PROFILE/SET_AI_GENERATED_PHOTO',
    AI_AVATAR_GENERATED_SUCCESS = 'SOCIAL-NETWORK/PROFILE/AI_AVATAR_GENERATED_SUCCESS';



type AddPostActionType = {
  type: typeof AD_POST
  someNewPost: string
}

export const addPost = (text: string): AddPostActionType => (
    {type: AD_POST, someNewPost: text}
);

type ChangeNumOfLike = {
  type: typeof CHANGE_NUM_OF_LIKE
  newNumOfLikes: number
  id: number
}

export const changeNumOfLike = (num: number, postId:number): ChangeNumOfLike => (
    {type: CHANGE_NUM_OF_LIKE, newNumOfLikes: num, id: postId}
);

type SetUserProfile = {
  type: typeof SET_USER_PROFILE
  currentProfile: ProfileType
}

export const setUserProfile = (currentProfile: ProfileType): SetUserProfile => (
    {type: SET_USER_PROFILE, currentProfile}
);

type SetUserStatus = {
  type: typeof SET_USER_STATUS
  status: string
}

export const setUserStatus = (status: string): SetUserStatus => (
  {type: SET_USER_STATUS, status}
);

type UpLoadAvatarSuccess = {
  type: typeof UPLOAD_AVATAR_SUCCESS
  data: PhotosType
}

export const upLoadAvatarSuccess = (data: PhotosType): UpLoadAvatarSuccess => ({
  type: UPLOAD_AVATAR_SUCCESS,
  data
});


type SetAIGeneretedPhotoActionType = {
  type: typeof SET_AI_GENERATED_PHOTO
  data: AIGeneratedFacesType
}

export const setAIGeneretedPhoto = (data: AIGeneratedFacesType): SetAIGeneretedPhotoActionType => ({
  type: SET_AI_GENERATED_PHOTO,
  data
});

type IsloadProfileDataSuccessActionType = {
  type: typeof LOAD_PROFILE_DATA_SUCCESS
  result: boolean
}

export const isloadProfileDataSuccess = (result: boolean): IsloadProfileDataSuccessActionType => ({
  type: LOAD_PROFILE_DATA_SUCCESS,
  result: result
})

type IsSetAIAvatarGeneratedSuccesActionType = {
  type: typeof AI_AVATAR_GENERATED_SUCCESS
  state: boolean
  msg: string
}

export const isSetAIAvatarGeneratedSucces = (state: boolean, msg: string): IsSetAIAvatarGeneratedSuccesActionType => ({
  type: AI_AVATAR_GENERATED_SUCCESS,
  state: state,
  msg: msg
})

type SetErrorsActionType = {
  type: typeof SET_PROFILESET_ERRORS
  errors: Array <string>
}

export const setErrors = (errors: Array<string>): SetErrorsActionType => ({type: SET_PROFILESET_ERRORS, errors});

type ActionType = SetErrorsActionType | IsSetAIAvatarGeneratedSuccesActionType | IsloadProfileDataSuccessActionType | SetAIGeneretedPhotoActionType | UpLoadAvatarSuccess | SetUserStatus | SetUserProfile | ChangeNumOfLike | AddPostActionType


let initialState = {
  posts: [{
    id: 1,
    msg: 'И снова здрасте-)',
    numOfLikes: 0
  }, {
      id: 2,
      msg: 'Привет, народ!)',
      numOfLikes: 0
    }],
    currentProfile: null as null | ProfileType,
    newNumOfLikes: null as null | number,
    currentStatus: '',
    profileSetErrors: [] as Array <string>,
    loadProfileDataSuccess: false,
    generatedFaces: {} as AIGeneratedFacesType,
    isAIAvatarGeneratedSucces: true,
    aVatarNotFoundMsg: ''

};


// {
//   id: "",
//     urls: [
//       { 32: "" }, { 64: "" }, { 128: "" }, { 256: "" }, { 512: "" }],
//       meta: {
//     confidence: 0.000888282957021147,
//       gender: [""],
//         age: [""],
//           ethnicity: [""],
//             eye_color: [""],
//               hair_color: [""],
//                 hair_length: [""],
//                   emotion: [""]
//   }
// }


type InitialStateType = typeof initialState

export const getProfile = (userID: number) => async (dispatch: any) => {
  dispatch(isloading(true));
  let data = await profileAPI.getProfile(userID)
      dispatch(setUserProfile(data));
      dispatch(isloading(false));
};


export const loadProfileData = (profile: ProfileType) => async (dispatch: any, getState: any) => {
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


export const getStatus = (userID: number) => async (dispatch: any) => {
  dispatch(isloading(true));
  let data = await profileAPI.getStatus(userID);
      dispatch(setUserStatus(data));
      dispatch(isloading(false));
};

export const setStatus = (status: string) => async (dispatch: any) => {
  dispatch(isloading(true));
  let data = await profileAPI.setStatus(status);
      data.resultCode === 0 ? dispatch(setUserStatus(status)) : console.log(data.messages);
      dispatch(isloading(false));
};

export const upLoadAvatar = (avatar: any) => async (dispatch: any) => {
  dispatch(isloading(true));
  let data = await profileAPI.upLoadAvatar(avatar);
  data.resultCode === 0 ? dispatch(upLoadAvatarSuccess(data.data.photos as PhotosType)) : console.log(data.message);
      dispatch(isloading(false));
};

export const getGeneratedPhoto = (faceParams: any, page: number, perPage: number, orderBy: string) => async (dispatch: any) => {
  dispatch(isloading(true));
  let data = await generatedFotoAPI.getGeneratedPhoto(faceParams, page, perPage, orderBy);
    if (data.total === 0) {
      dispatch(isSetAIAvatarGeneratedSucces(false, 'Изображения с выбранными параметрами отсутствуют в базе. Поменяйте условия'));
    } else {
      dispatch(setAIGeneretedPhoto(data));
      dispatch(isSetAIAvatarGeneratedSucces(true, ''));
     dispatch(isloading(false));
    }
};

export const resetForm = (formName: string) => (dispatch: any) => {
  dispatch(reset(formName));
}


const profileReducer = (state = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case AD_POST:
            let newItem = {
                id: 1,
                msg: action.someNewPost,
                numOfLikes: 0
            };

        let newposts = [
          ...state.posts
        ]
        newposts.map((post:any) => {
          post.id++; 
        })
        newposts.unshift(newItem);
            return {
                ...state,
                posts: newposts
            }

            
     

        case CHANGE_NUM_OF_LIKE:

            let stateCopy = {
                ...state,
                posts: [...state.posts],
                newNumOfLikes: +action.newNumOfLikes + 1
            }
            

            for (let i = 0; i < stateCopy.posts.length; i++) {
                stateCopy.posts[i] = {
                    ...state.posts[i]
                };
            }
            stateCopy
                .posts[action.id - 1]
                .numOfLikes = +action.newNumOfLikes;
            return stateCopy;

        case SET_USER_PROFILE:
            return {...state, currentProfile: action.currentProfile};
        
        case SET_AI_GENERATED_PHOTO:
            return {...state, 
                    generatedFaces: action.data};
 
        case LOAD_PROFILE_DATA_SUCCESS:
            return {...state, loadProfileDataSuccess: action.result};
        
            case AI_AVATAR_GENERATED_SUCCESS:
            return {...state, isAIAvatarGeneratedSucces: action.state, 
            aVatarNotFoundMsg: action.msg};

        case UPLOAD_AVATAR_SUCCESS:
          return {
            ...state,
            currentProfile: { ...state.currentProfile, photos: action.data } as ProfileType 
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