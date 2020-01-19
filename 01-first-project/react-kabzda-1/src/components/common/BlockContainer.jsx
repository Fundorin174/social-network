import React from 'react';
import classes from './../Profile/Posts/Posts.module.css';





export const InputFieldCreator = ({input, meta, ...props}) => {
  let inputType = props.type;
  return (
    <>
      <div className={classes.textareaWrp}>
        {inputType == 'textarea' ? <textarea className={meta.touched && meta.error ? classes.error : ''} {...input} {...props}/> : <input className={meta.touched && meta.error ? classes.error : ''} {...input} {...props}/>}
      </div>
      <div className={classes.spanWrp}>
        {meta.touched &&  meta.error && <span>{meta.error}</span>}
      </div>
    </>
  )
}

