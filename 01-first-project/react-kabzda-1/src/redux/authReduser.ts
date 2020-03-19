import {authAPI} from '../DAL/api';
import {stopSubmit} from "redux-form";
import { AuthDataType, LetAuthType, LoginResponseType } from '../types/types';
import { AppStateType } from './reduxStore';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

const SET_AUTH_DATA = 'SOCIAL-NETWORK/AUTH/SET_AUTH_DATA';
const DELETE_AUTH_DATA = 'SOCIAL-NETWORK/AUTH/DELETE_AUTH_DATA';
const SET_CAPTCHA = 'SOCIAL-NETWORK/AUTH/SET_CAPTCHA'



type AuthMeActionType = {
  type: typeof SET_AUTH_DATA
  data: AuthDataType
}

export const authMe = (data: AuthDataType): AuthMeActionType => ({type: SET_AUTH_DATA, data});

type DeleteAuthMeActionType = {
  type: typeof DELETE_AUTH_DATA
}

const deleteAuthMe = (): DeleteAuthMeActionType => ({type: DELETE_AUTH_DATA})

type SetCaptchaActionType = {
  type: typeof SET_CAPTCHA
  url: string
}

const setCaptcha = (url: string): SetCaptchaActionType => ({
  type: SET_CAPTCHA,
  url
})

type ActionType = AuthMeActionType | DeleteAuthMeActionType | SetCaptchaActionType;

type ThunkResult<R> = ThunkAction<R, AppStateType, undefined, ActionType>

export const letAuth = ():ThunkResult<void> => (dispatch, getState) => {
  return authAPI.auth()
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(authMe(data.data));
      }
    });
};

export const login = (email:string, password:string, rememberMe:boolean, captcha:string | undefined):ThunkResult<void> => (dispatch, getState) => {
  authAPI.login(email, password, rememberMe, captcha)
 .then((data) => {
    if (data.resultCode === 0) {
      dispatch(letAuth());
    } else if (data.resultCode === 10) {
      let message = data.messages;
      let action = stopSubmit('LoginForm', {
        _error: message
      });
      authAPI.getCaptcha()
      .then((response) => {        
        dispatch(setCaptcha(response.url));
        dispatch(action);
      })
    }
    
    else {
      let message = data.messages;
      let action = stopSubmit('LoginForm', {_error: message});
      dispatch(action);
    }

 });
};


export const logout = () => (dispatch: Dispatch<ActionType>, getState: () => AppStateType) => {
  authAPI.logout()
  .then((data:any) => {

    if (data.data.resultCode === 0) {
      dispatch(deleteAuthMe());      
    }

  });
};



let initialState = {
    id: null as null | number,
    login: null as null | string,
    email: null as null | string,
    isAuth: false,
    capchaUrl: null as null | string,
    isCaptchaNeeded: false

};

export type AuthInitialStateType = typeof initialState

const authReducer = (state = initialState, action:ActionType): AuthInitialStateType => {

    switch (action.type) {

        case SET_AUTH_DATA:

            return {
                ...state,
                ...action.data,
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