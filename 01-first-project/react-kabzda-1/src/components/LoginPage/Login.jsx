import React from 'react';
import classes from './Login.module.css';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { login} from './../../redux/authReduser';

const Login = (props) => {


  let onSubmit = values => {
    let email = values.email,
      password = values.password,
      rememberMe = values.rememberMe;
    props.login(email, password, rememberMe);

  };
  return <div className = {classes.login}>
    <h1 className = {classes.title}>Страница авторизации</h1>
    <LoginForm onSubmit={onSubmit} />
  </div>
}

let mapStateToProps = (state) => {
  return {  }

}

export default connect(mapStateToProps, { login })(Login);
