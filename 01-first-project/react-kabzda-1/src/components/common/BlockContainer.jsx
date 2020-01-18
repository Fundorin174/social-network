import React from 'react';
import classes from './../Profile/Posts/Posts.module.css';

export const Textarea = ({input, meta, ...props}) => {

  return (
    <>
    <div className={classes.textareaWrp}>
      <textarea className={meta.touched && meta.error ? classes.error : ''} {...input} {...props}/>
    </div>
      <div className={classes.spanWrp}>
        {meta.touched &&  meta.error && <span>{meta.error}</span>}
      </div>
  </>

)

}