import React from 'react';
import classes from './BlockContainer.module.css';





export const InputFieldCreator = ({input, meta, ...props}) => {
  let inputType = props.type;

  return (
    <>
      <div className={classes.textareaWrp}>
        {inputType === 'textarea' ? <textarea className={meta.touched && meta.error ? classes.error : ''} {...input} {...props}/> : <input className={meta.touched && meta.error ? classes.error : ''} {...input} {...props}/>}
      </div>
      <div className={classes.spanWrp}>
        {meta.touched &&  meta.error && <span>{meta.error}</span>}
      </div>
    </>
  )
}

export const InputDataFieldCreator = ({ input, meta, ...props }) => {
  let inputType = props.type;
  let label = props.label;
  let formError = props.formerror;
  
  
  // const isThisFieldHasError = (name) =>{
  //   const isNameIndex = errorsFromServer.indexOf(name);
    
  // }
    // errorsFromServer.indexOf(input.name)

  return (
    <>
      <div className={`${classes.inputWrp} ${!!meta.touched && !!meta.error ? classes.error: null}`}>
        {<span className = {classes.label}>{label}</span>}
        {inputType === 'textarea' ? <textarea className={!!meta.touched && !!meta.error ? classes.error : classes.textarea} {...input} {...props} /> : (<input className={!!meta.touched && !!meta.error ? classes.error : ''} {...input} {...props} />)}
      </div>
      <div className={classes.spanWrp}>
        {!!meta.touched && !!meta.error && <span>{meta.error}</span>}
        {(formError && input) 
        ? 
          <span>{formError}</span>
        :
        null}
      </div>
    </>
  )
}

