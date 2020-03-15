import React from 'react';
import classes from './Login.module.css';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { login} from '../../redux/authReduser';
import {Redirect} from "react-router-dom";
import { getIsAuthSelector, getCapchaUrlSelector, getIsCaptchaNeededSelector} from "../../redux/authSelectors";
import { AppStateType } from '../../redux/reduxStore';
import { LoginValuesType } from '../../types/types';

type LoginMapStatePropsType = {
  isAuth: boolean
  capchaUrl: null | string
  isCaptchaNeeded: boolean
}

type LoginMapDispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string | undefined) => void
}

type LoginOwnPropsType = {
  onSubmit: (values: LoginValuesType) => void
}

type LoginPropsType = LoginMapStatePropsType & LoginMapDispatchPropsType & LoginOwnPropsType

const Login: React.FC<LoginPropsType> = (props) => {


  let onSubmit = (values: LoginValuesType)  => {
    let email = values.email,
      password = values.password,
      rememberMe = values.rememberMe,
      captcha = values.captcha;
    props.login(email, password, rememberMe, captcha);


  };
  if (props.isAuth) {
        return <Redirect to={"/profile"}></Redirect>
  }
  else {
    return <div className = {classes.login}>
      <h1 className = {classes.title}>Страница авторизации</h1>
      <LoginForm onSubmit={onSubmit} capchaUrl={props.capchaUrl} isCaptchaNeeded={props.isCaptchaNeeded}/>
    </div>
  }

}

let mapStateToProps = (state: AppStateType): LoginMapStatePropsType => {
  return {
    isAuth: getIsAuthSelector(state),
    capchaUrl: getCapchaUrlSelector(state),
    isCaptchaNeeded: getIsCaptchaNeededSelector(state)
  }

}

export default connect<LoginMapStatePropsType, LoginMapDispatchPropsType, LoginOwnPropsType, AppStateType>(mapStateToProps, { login })(Login);
