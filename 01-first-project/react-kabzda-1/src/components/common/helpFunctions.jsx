import React from 'react';
import {Field} from "redux-form"


export const changeElementInArray = (items, changedElement, newElement, objProps) => {

  return items.map((item) => {
    if (item[changedElement] === newElement) {
      return {
        ...item, ...objProps
      }
    }
    return item;
  })
}


export const createTextField = (className, name, component, type, placeholder, validate, label, formerror)  => <Field
  className={className}
    name = {name}
    component = {component}
    type = {type}
    placeholder = {placeholder}
    validate = {validate}
    label={label}
    formerror={formerror}
  />

// export const createSelectField = (className, name, type, label, formOptions) => {
//   const createOpions = (formOptions) => {
//     let valueKeys = Object.keys(formOptions),
//         optionsValues = [];
//         for (let value of formOptions) {
//           optionsValues.push(value);
//         }
    
//     for (let i = 0; i < valueKeys.length; i++){
      
//       return <option value={valueKeys[i]}>{optionsValues[i]}</option>
//     }
        
//   }

  
//   return (<div>
//     <label>{label}</label>
//     <div>
//       <Field 
//       className={className}
//       name={name}
//       component="select"
//       type={type}>
//         {createOpions}
//         {/* <option></option>
//         <option value="#ff0000">Red</option>
//         <option value="#00ff00">Green</option>
//         <option value="#0000ff">Blue</option> */}
//       </Field>
//     </div>
//   </div>)
// }