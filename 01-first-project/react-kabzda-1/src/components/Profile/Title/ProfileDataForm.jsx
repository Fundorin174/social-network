import React from 'react';
import classes from './ProfileDataForm.module.css';
import { reduxForm } from 'redux-form';
import { InputDataFieldCreator } from "./../../common/BlockContainer";
import { required } from "./../../common/validators";
import { createTextField } from "./../../common/helpFunctions";


let ProfileDataForm = (props) => {

  let formerror = props.formError.join(', ');


  return (
    <>
      <form
        onSubmit={props.handleSubmit}
        className={`${classes.ProfileDataform} ${classes.form}`}
      > 
      <span onClick = {()=>{props.setEditMode(false)}} className = {classes.closeBtn}>Закрыть</span>
      <div className = {classes.allInputWrp}>
          {createTextField(classes.textFieldProfile, "FullName", InputDataFieldCreator, "input", "Имя", [], 'Ваше Имя: ', formerror)}
          {createTextField(classes.textFieldProfile, "AboutMe", InputDataFieldCreator, "textarea", "Описание", [], 'Обо мне: ', formerror)}
        <div className={classes.inputWrp}>
          <span>Ищу работу</span>
          {createTextField('', "lookingForAJob", 'input', "checkbox", null, [])}
        </div>
          {createTextField(classes.textFieldProfile, "LookingForAJobDescription", InputDataFieldCreator, "textarea", "Описание", [], 'Опишите желаемую вакансию: ', formerror)}

      </div>
        <div>
          <span>Укажите Ваши контакты: </span>
          {createTextField(classes.textFieldProfile, "contacts.facebook", InputDataFieldCreator, "input", null, [], 'Facebook: ', formerror)}
          {createTextField(classes.textFieldProfile, "contacts.website", InputDataFieldCreator, "input", null, [], 'Website: ', formerror)}
          {createTextField(classes.textFieldProfile, "contacts.vk", InputDataFieldCreator, "input", null, [], 'VK: ', formerror)}
          {createTextField(classes.textFieldProfile, "contacts.twitter", InputDataFieldCreator, "input", null, [], 'Twitter: ', formerror)}
          {createTextField(classes.textFieldProfile, "contacts.instagram", InputDataFieldCreator, "input", null, [], 'Instagram: ', formerror)}
          {createTextField(classes.textFieldProfile, "contacts.youtube", InputDataFieldCreator, "input", null, [], 'Youtube: ', formerror)}
          {createTextField(classes.textFieldProfile, "contacts.github", InputDataFieldCreator, "input", null, [], 'Github: ', formerror)}
          {createTextField(classes.textFieldProfile, "contacts.mainLink", InputDataFieldCreator, "input", null, [], 'MainLink: ', formerror)}
        </div>
        {props.formError[0] ?
          <div className={classes.error}>
            {<span>{formerror}</span>}
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