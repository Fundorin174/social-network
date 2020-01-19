import React from 'react';
import classes from './Posts.module.css';
import {Field, reduxForm} from 'redux-form';
import {InputFieldCreator} from "../../common/BlockContainer";
import {maxLengthCreator, required} from "../../common/validators";

const maxLength50 = maxLengthCreator(100);
let FormProfileNewMsg = (props) => {
    return (
      <>
        <form
          onSubmit={props.handleSubmit}
          className={classes.profileNewsForm}
          >
          <Field
            name="someNewPost"
            id={classes.youNews}
            component={InputFieldCreator}
            type="textarea"
            placeholder="Введите сообщение"
            validate = {[required, maxLength50]}
          />
          <button className={classes.btn}>
            Добавить сообщение
          </button>
        </form>
      </>
    );
}

FormProfileNewMsg = reduxForm({
  form: 'FormProfileNewMsg'
})(FormProfileNewMsg);

export default FormProfileNewMsg;