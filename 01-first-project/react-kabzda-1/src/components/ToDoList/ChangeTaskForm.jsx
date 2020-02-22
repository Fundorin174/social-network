import React from 'react';
import classes from './../Profile/Title/ProfileDataForm.module.css';
import {reduxForm, Field} from 'redux-form';
import {InputDataFieldCreator} from "../common/BlockContainer";
import {required} from "../common/validators";
import {createTextField} from "../common/helpFunctions";

let ChangeTaskForm = (props) => {

  let formerror = props.error ? props.error : [];

    return (
        <> < form onSubmit = {
            props.handleSubmit
        }
        className = {
            `${classes.ProfileDataform} ${classes.form}`
        } > <span
            onClick={() => {
                props.toggleChangeTaskForm()
            }}
            className={classes.closeBtn}>Закрыть</span>
        <div className={classes.allInputWrp}>
          {props.error && <span>{props.error}</span>}
            {
                createTextField(
                    classes.textFieldProfile,
                    "title",
                    InputDataFieldCreator,
                    "input",
                    "Имя списка",
                    [required],
                    'Название: ',
                    formerror
                )
            }
            {
                createTextField(
                    classes.textFieldProfile,
                    "description",
                    InputDataFieldCreator,
                    "textarea",
                    "Описание",
                    [required],
                    'Описание: ',
                    formerror
                )
            }
            {
                createTextField(
                    classes.textFieldProfile,
                    "completed",
                    InputDataFieldCreator,
                    "checkbox",
                    '',
                    [],
                    'Завершено: ',
                    formerror
                )
            }
            <div className={classes.inputWrp}>
                <label className={classes.label}>Статус:
                </label>
                <div>
                    <Field
                        className={classes.textFieldProfile}
                        name='status'
                        component="select"
                        type='input'>
                        <option ></option>
                        <option value="1">Служебное</option>
                        <option value="2">Личное</option>
                        <option value="3">Одолжение</option>
                    </Field>
                </div>
            </div>
          {
            createTextField(
              classes.textFieldProfile,
              "priority",
              InputDataFieldCreator,
              "number",
              '',
              [],
              'Приоритет: ',
              formerror
            )
          }
          {
            createTextField(
              classes.textFieldProfile,
              "startDate",
              InputDataFieldCreator,
              "date",
              '',
              [],
              'Дата начала: ',
              formerror
            )
          }
          {
            createTextField(
              classes.textFieldProfile,
              "deadline",
              InputDataFieldCreator,
              "date",
              '',
              [],
              'Deadline: ',
              formerror
            )
          }
        </div>
        {formerror ?
        <div className={classes.error}>
            {<span>{formerror}</span>}
        </div>
        :
        null
      } 
            {
        } <button className = {
            classes.btn
        }>Добавить</button> </form>
    </>);
}

ChangeTaskForm = reduxForm({form: 'ChangeTaskForm'})(ChangeTaskForm);

export default ChangeTaskForm;