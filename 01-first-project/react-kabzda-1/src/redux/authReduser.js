import {authAPI} from '../DAL/api';
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const DELETE_AUTH_DATA = 'DELETE_AUTH_DATA';

export const authMe = (data) => ({type: SET_AUTH_DATA, data});

const deleteAuthMe = () => ({type: DELETE_AUTH_DATA})




export const login = (email, password, rememberMe) => (dispatch) => {

  authAPI.login(email, password, rememberMe)
 .then(response => {

    if (response.data.resultCode === 0) {
      dispatch(letAuth());
    } else {
      let message = response.data.messages;
      let action = stopSubmit('LoginForm', {_error: message});
      dispatch(action);
    }

 });
};


export const logout = () => (dispatch) => {
  authAPI.logout()
  .then(data => {

    if (data.data.resultCode === 0) {
      dispatch(deleteAuthMe());
      
    }

  });
};

export const letAuth = () => dispatch => {
  return authAPI.auth()
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(authMe(data));
      }
    });
};

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false

};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_AUTH_DATA:

            return {
                ...state,
                ...action.data.data,
                isAuth: true
            }
        case DELETE_AUTH_DATA:
          
        return {
          ...state,
            id: null,
            login: null,
            email: null,
            isAuth: false
        }

        default:
            return state;

    }
}

export default authReducer;