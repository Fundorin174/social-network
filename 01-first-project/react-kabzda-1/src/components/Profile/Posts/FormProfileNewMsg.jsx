import React from 'react';
import classes from './Posts.module.css';
import {Field, reduxForm} from 'redux-form';

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
            component="textarea"
            type="text"
            placeholder="Введите сообщение"
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