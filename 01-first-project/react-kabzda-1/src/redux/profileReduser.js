import store from "./reduxStore";

const AD_POST = 'AD-POST',
      CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT',
      CHANGE_NUM_OF_LIKE = 'CHANGE_NUM_OF_LIKE';

export const addPostActionCreator = (text) => 
({type: AD_POST, someNewPost: text});

export const changeTextActionCreator = (text) => 
({type: CHANGE_NEW_POST_TEXT, newAddedPost: text});

export const changeNumOfLikeCreator = (num, postId) => 
({type: CHANGE_NUM_OF_LIKE, newNumOfLikes: num, id: postId});


let initialState = {
        posts: [
                {id: '1', msg: 'Deserunt dolor aliqua ex elit et.', numOfLikes: 0},
                {id: '2', msg: 'Fuck', numOfLikes: 0},
                {id: '3', msg: 'Это Redux детка!', numOfLikes: 0},
                {id: '4', msg: 'Ахахахаха', numOfLikes: 0},
                {id: '5', msg: 'Получилось!!!', numOfLikes: 0}
              ],
        
        newPostText: '',
        newNumOfLikes: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case AD_POST:
                let newItem = {
                    id: (`${state.posts.length+1}`),
                    msg: action.someNewPost, 
                    numOfLikes: 0
                };
                
                state.posts.push(newItem);
                state.newPostText ='';
                return state;

        case CHANGE_NEW_POST_TEXT:
                state.newPostText = action.newAddedPost;
                return state;

        case CHANGE_NUM_OF_LIKE:
                state.newNumOfLikes = action.newNumOfLikes;

                state.posts[action.id-1].numOfLikes = action.newNumOfLikes;
                return state;

        default: return state;


}
}

export default profileReducer;