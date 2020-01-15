import React from 'react';
import classes from './Messages.module.css';
import {Field, reduxForm} from 'redux-form';

let FormMessagesNewMsg = (props) => {


    return (
      <>
        <form
          onSubmit={props.handleSubmit}
          className={classes.form}
          >
          <Field
            className={classes.addNewMsg}
            name="someNewMsg"
            component="textarea"
            type="text"
            placeholder="Введите сообщение"
          />
          <button className={classes.msg_btn}>
            Добавить сообщение
          </button>
        </form>
      </>
    );
}

FormMessagesNewMsg = reduxForm({
  form: 'FormMessagesNewMsg'
})(FormMessagesNewMsg);

export default FormMessagesNewMsg;