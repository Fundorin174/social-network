import React from 'react';
import classes from './Login.module.css';
import {reduxForm} from 'redux-form';
import {InputFieldCreator} from "../common/BlockContainer";
import {required} from "../common/validators";
import {createTextField} from "../common/helpFunctions";


let LoginForm = (props) => {


    return (
      <>
        <form
          onSubmit={props.handleSubmit}
          className={classes.form}
          >
          {/* <Field
            className={classes.textField}
            name="name"
            component="input"
            type="text"
            placeholder="Имя"
          /> */}
          {createTextField(classes.textField, "email", InputFieldCreator, "input", "E-mail", [required])}
          {createTextField(classes.textField, "password", InputFieldCreator, "password", "Пароль", [required])}
          <div>
          {createTextField('', "rememberMe", 'input', "checkbox", null, [])}
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