import React from 'react';
import classes from './../Profile/Title/ProfileDataForm.module.css';
import {reduxForm, Field} from 'redux-form';
import {InputDataFieldCreator} from "./../common/BlockContainer";
import {required} from "./../common/validators";
import {createTextField} from "./../common/helpFunctions";

let NewTaskForm = (props) => {

    let formerror = props.formError;

    return (
        <> < form onSubmit = {
            props.handleSubmit
        }
        className = {
            `${classes.ProfileDataform} ${classes.form}`
        } > <span
            onClick={() => {
                props.toggleNewTaskForm()
            }}
            className={classes.closeBtn}>Закрыть</span>
        <div className={classes.allInputWrp}>
            {
                createTextField(
                    classes.textFieldProfile,
                    "title",
                    InputDataFieldCreator,
                    "input",
                    "Имя задания",
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
            {/* {props.formError[0] ?
          <div className={classes.error}>
            {<span>Необходимо правильно заполнить указанные поля</span>}
          </div>
          :
          null
        } */
        } <button className = {
            classes.btn
        }>Добавить</button> </form>
    </>);
}

NewTaskForm = reduxForm({form: 'NewTaskForm'})(NewTaskForm);

export default NewTaskForm;