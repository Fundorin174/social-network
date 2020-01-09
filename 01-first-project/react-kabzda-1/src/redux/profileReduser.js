import { usersAPI } from './../DAL/api';
import { isloading } from './userReduser';

const AD_POST = 'AD-POST',
    CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT',
    CHANGE_NUM_OF_LIKE = 'CHANGE_NUM_OF_LIKE',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_USER_STATUS = 'SET_USER_STATUS';

export const addPost = (text) => (
    {type: AD_POST, someNewPost: text}
);

export const changeText = (text) => (
    {type: CHANGE_NEW_POST_TEXT, newAddedPost: text}
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
    posts: [
        {
            id: '1',
            msg: 'Deserunt dolor aliqua ex elit et.',
            numOfLikes: 0
        }, {
            id: '2',
            msg: 'Fuck',
            numOfLikes: 0
        }, {
            id: '3',
            msg: 'Это Redux детка!',
            numOfLikes: 0
        }, {
            id: '4',
            msg: 'Ахахахаха',
            numOfLikes: 0
        }, {
            id: '5',
            msg: 'Получилось!!!',
            numOfLikes: 0
        }
    ],
    currentProfile: null,
    newPostText: '',
    newNumOfLikes: '',
    currentStatus: null
};

export const getProfile = (userID = 5585) => (dispatch) => {
  dispatch(isloading(true));
  usersAPI.getProfile(userID)
    .then(data => {
      dispatch(setUserProfile(data));
      dispatch(isloading(false));
    });
};

export const getStatus = (userID = 5585) => (dispatch) => {
  dispatch(isloading(true));
  usersAPI.getStatus(userID)
    .then(data => {
      dispatch(setUserStatus(data));
      dispatch(isloading(false));
    });
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case AD_POST:
            let newItem = {
                id: (`${state.posts.length + 1}`),
                msg: action.someNewPost,
                numOfLikes: 0
            };

            return {
                ...state,
                posts: [
                    ...state.posts,
                    newItem
                ],
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