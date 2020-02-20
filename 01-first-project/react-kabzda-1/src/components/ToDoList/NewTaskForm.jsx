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
                    "Имя списка",
                    [required],
                    'Название: ',
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