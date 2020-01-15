import React from 'react';
import classes from './Login.module.css';
import {Field, reduxForm} from 'redux-form';


let LoginForm = (props) => {


    return (
      <>
        <form
          onSubmit={props.handleSubmit}
          className={classes.form}
          >
          {/* <Field
            className={classes.name}
            name="name"
            component="input"
            type="text"
            placeholder="Имя"
          /> */}
          <Field
            className={classes.email}
            name="email"
            component="input"
            type="text"
            placeholder="E-mail"
          />
          <Field
            className={classes.password}
            name="password"
            component="input"
            type="text"
            placeholder="Пароль"
          />

          <div>
          <Field
            className={classes.rememberMe}
            name="rememberMe"
            component="input"
            type="checkbox"
          /> 
          <span>Запомнить меня</span>

          </div>
          <button className={classes.btn}>
            Отправить
          </button>
        </form>
      </>
    );
}

LoginForm = reduxForm({
  form: 'LoginForm'
})(LoginForm);

export default LoginForm;