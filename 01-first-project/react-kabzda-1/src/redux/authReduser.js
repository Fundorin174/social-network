import {authAPI} from '../DAL/api';
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'SOCIAL-NETWORK/AUTH/SET_AUTH_DATA';
const DELETE_AUTH_DATA = 'SOCIAL-NETWORK/AUTH/DELETE_AUTH_DATA';
const SET_CAPTCHA = 'SOCIAL-NETWORK/AUTH/SET_CAPTCHA'

export const authMe = (data) => ({type: SET_AUTH_DATA, data});

const deleteAuthMe = () => ({type: DELETE_AUTH_DATA})

const setCaptcha = (url) => ({
  type: SET_CAPTCHA, 
  url:url
})



export const login = (email, password, rememberMe, captcha) => (dispatch) => {

  authAPI.login(email, password, rememberMe, captcha)
 .then(response => {

    if (response.data.resultCode === 0) {
      dispatch(letAuth());
    } else if (response.data.resultCode === 10) {
      let message = response.data.messages;
      let action = stopSubmit('LoginForm', {
        _error: message
      });
      authAPI.getCaptcha()
      .then(response => {        
        dispatch(setCaptcha(response.url));
        dispatch(action);
      })
    }
    
    else {
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
    isAuth: false,
    capchaUrl: null,
    isCaptchaNeeded: false

};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_AUTH_DATA:

            return {
                ...state,
                ...action.data.data,
                isAuth: true,
                isCaptchaNeeded: false
            }

        case DELETE_AUTH_DATA:
          
        return {
          ...state,
            id: null,
            login: null,
            email: null,
            isAuth: false
        }

        case SET_CAPTCHA:
          
        return {
          ...state,
           capchaUrl: action.url,
           isCaptchaNeeded: true
        }

        default:
            return state;

    }
}

export default authReducer;