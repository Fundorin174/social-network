import React from 'react';
import classes from './BlockContainer.module.css';
import classNames from 'classnames';

export const InputFieldCreator = ({
    input,
    meta,
    ...props
}) => {
let inputType = props.type;

        return (<> < div className = {
            classes.textareaWrp
        } > {
            inputType === 'textarea'
                ? <textarea
                        className={meta.touched && meta.error
                            ? classes.error
                            : ''}
                        {...input}
                        {...props}/>
                : <input
                        className={meta.touched && meta.error
                            ? classes.error
                            : ''}
                        {...input}
                        {...props}/>
        } < /div>
      <div className={classes.spanWrp}>
        {meta.touched &&  meta.error && <span>{meta.error}</span >} < /div>
    </ >
)
}

export const InputDataFieldCreator = ({input, meta, ...props}) => {
let inputType = props.type;
let label = props.label;
let formError = props.formerror;
let inputName = input
    .name
    .toLowerCase();
//slice "contacts" from name
if (inputName.includes('contacts')) {
    inputName = inputName.slice(9);
}
//choosing only personal error each input
let filteredFormError = formError.filter(
    item => item.toLowerCase().includes(inputName)
)

return (
<> <div className = {
    classNames(classes.inputWrp, {
        [classes.error]: meta.touched && meta.error
    })
}> 
{
    <span className={classes.label}>{label}</span>
} 
{
    inputType === "textarea"
        ? (
            <textarea
                className={classNames({
                    [classes.error]: meta.touched && meta.error,
                    [classes.textarea]: !(meta.touched && meta.error)
                })}
                {...input}
                {...props}/>
        )
        : (
            <input
                className={meta.touched && meta.error
                    ? classes.error
                    : ""}
                {...input}
                {...props}/>
        )
} </div>
      <div className={classes.spanWrp}>
        {meta.touched && meta.error && <span>{meta.error}</span >
} {
formError[0] && input
? <span>{filteredFormError}</span>
: null
} </div>
    </ >
);
}