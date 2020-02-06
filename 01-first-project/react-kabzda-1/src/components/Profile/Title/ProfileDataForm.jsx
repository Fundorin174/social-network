import React from 'react';
import classes from './ProfileDataForm.module.css';
import { reduxForm } from 'redux-form';
import { InputDataFieldCreator } from "./../../common/BlockContainer";
import { required } from "./../../common/validators";
import { createTextField } from "./../../common/helpFunctions";


let ProfileDataForm = (props) => {


  return (
    <>
      <form
        onSubmit={props.handleSubmit}
        className={`${classes.ProfileDataform} ${classes.form}`}
      > 
      <span onClick = {()=>{props.setEditMode(false)}} className = {classes.closeBtn}>Закрыть</span>
      <div className = {classes.allInputWrp}>
        {createTextField(classes.textFieldProfile, "FullName", InputDataFieldCreator, "input", "Имя", [], 'Ваше Имя: ')}
        {createTextField(classes.textFieldProfile, "AboutMe", InputDataFieldCreator, "textarea", "Описание", [], 'Обо мне: ')}
        <div className={classes.inputWrp}>
          <span>Ищу работу</span>
          {createTextField('', "lookingForAJob", 'input', "checkbox", null, [])}
        </div>
        {createTextField(classes.textFieldProfile, "LookingForAJobDescription", InputDataFieldCreator, "textarea", "Описание", [], 'Опишите желаемую вакансию: ')}

      </div>
        <div>
          <span>Укажите Ваши контакты: </span>
          {createTextField(classes.textFieldProfile, "contacts.facebook", InputDataFieldCreator, "input", null, [], 'Facebook: ')}
          {createTextField(classes.textFieldProfile, "contacts.website", InputDataFieldCreator, "input", null, [], 'Website: ')}
          {createTextField(classes.textFieldProfile, "contacts.vk", InputDataFieldCreator, "input", null, [], 'VK: ')}
          {createTextField(classes.textFieldProfile, "contacts.twitter", InputDataFieldCreator, "input", null, [], 'Twitter: ')}
          {createTextField(classes.textFieldProfile, "contacts.instagram", InputDataFieldCreator, "input", null, [], 'Instagram: ')}
          {createTextField(classes.textFieldProfile, "contacts.youtube", InputDataFieldCreator, "input", null, [], 'Youtube: ')}
          {createTextField(classes.textFieldProfile, "contacts.github", InputDataFieldCreator, "input", null, [], 'Github: ')}
          {createTextField(classes.textFieldProfile, "contacts.mainLink", InputDataFieldCreator, "input", null, [], 'MainLink: ')}
        </div>
        {props.error ?
          <div className={classes.error}>
            {props.error}
          </div>
          :
          null
        }
        <button className={classes.btn}>
          Сохранить</button>
      </form>
    </>
  );
}

ProfileDataForm = reduxForm({
  form: 'ProfileDataForm'
})(ProfileDataForm);

export default ProfileDataForm;