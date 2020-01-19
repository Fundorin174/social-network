import React from 'react';
import classes from './Login.module.css';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { login} from './../../redux/authReduser';
import {Redirect} from "react-router-dom";

const Login = (props) => {


  let onSubmit = values => {
    let email = values.email,
      password = values.password,
      rememberMe = values.rememberMe;
    props.login(email, password, rememberMe);

  };
  if (props.isAuth) {
        return <Redirect to={"/profile"}></Redirect>
  }
  else {
    return <div className = {classes.login}>
      <h1 className = {classes.title}>Страница авторизации</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  }

}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }

}

export default connect(mapStateToProps, { login })(Login);
