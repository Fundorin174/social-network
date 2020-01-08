import React from 'react';
import classes from './Login.module.css';

const Login = (props) => {
  return <div className = {classes.login}>
    <h1 className = {classes.title}>Страница авторизации</h1>
    <div className = {classes.form}> <ul>
      <li>Имя:</li>
      <li>Login:</li>
      <li>Пароль:</li>
      <li>E-mail:</li>
    </ul> </div>
  </div>
}

export default Login
