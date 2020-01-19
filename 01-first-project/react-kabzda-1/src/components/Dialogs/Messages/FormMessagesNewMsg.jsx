import React from 'react';
import classes from './Messages.module.css';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from "../../common/validators";
import {InputFieldCreator} from "../../common/BlockContainer";
const maxLength100 = maxLengthCreator(100)

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
            component={InputFieldCreator}
            type="text"
            placeholder="Введите сообщение"
            validate = {[required, maxLength100]}
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