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


export const createTextField = (className, name, component, type, placeholder, validate, label)  => <Field
    className = {className}
    name = {name}
    component = {component}
    type = {type}
    placeholder = {placeholder}
    validate = {validate}
  label={label}
  />