import React from 'react';
import classes from './Login.module.css';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { login} from './../../redux/authReduser';
import {Redirect} from "react-router-dom";
import { getIsAuthSelector, getCapchaUrlSelector, getIsCaptchaNeededSelector} from "../../redux/authSelectors";

const Login = (props) => {


  let onSubmit = values => {
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

let mapStateToProps = (state) => {
  return {
    isAuth: getIsAuthSelector(state),
    capchaUrl: getCapchaUrlSelector(state),
    isCaptchaNeeded: getIsCaptchaNeededSelector(state)
  }

}

export default connect(mapStateToProps, { login })(Login);
