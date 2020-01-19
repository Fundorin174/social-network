import React from 'react';
import classes from './Login.module.css';
import {Field, reduxForm} from 'redux-form';
import {InputFieldCreator} from "../common/BlockContainer";
import {required} from "../common/validators";


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
            component={InputFieldCreator}
            type="input"
            placeholder="E-mail"
            validate = {[required]}
          />
          <Field
            className={classes.password}
            name="password"
            component={InputFieldCreator}
            type="password"
            placeholder="Пароль"
            validate = {[required]}
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
          {props.error ?
            <div className={classes.error}>
              {props.error}
            </div>
            :
            null
          }
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