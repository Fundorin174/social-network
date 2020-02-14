import React from 'react';
import classes from './ProfileDataForm.module.css';
import { reduxForm } from 'redux-form';
import { Field } from "redux-form"


let CreateAIAvatarForm = (props) => {

  // let formerror = props.formError;
  // let formerror = props.formError.join(', ');
  // let formOptions = {};
  return (
    <>
      <form
        onSubmit={props.handleSubmit}
        className={`${classes.ProfileDataform} ${classes.form}`}
      > 
      <span onClick = {()=>{props.setEditAvatarMode(false)}} className = {classes.closeBtn}>Закрыть</span>
      <div className = {classes.allInputWrp}>

          <div className={classes.inputWrp}>
            <label className={classes.label}>Пол:  </label>
            <div>
              <Field
                className={classes.textFieldProfile}
                name='gender'
                component="select"
                type='input'>
                <option ></option>
                <option value="male">Мужской</option>
                <option value="female">Женский</option>
              </Field>
            </div>
          </div>

          <div className={classes.inputWrp}>
            <label className={classes.label}>Возраст:  </label>
            <div>
              <Field
                className={classes.textFieldProfile}
                name='age'
                component="select"
                type='input'>
                <option ></option>
                <option value="infant">Младенец</option>
                <option value="child">Ребенок</option>
                <option value="young-adult">Подросток</option>
                <option value="adult">Взрослый</option>
                <option value="elderly">Пожилой</option>
              </Field>
            </div>
          </div>

          <div className={classes.inputWrp}>
            <label className={classes.label}>Раса:  </label>
            <div>
              <Field
                className={classes.textFieldProfile}
                name='ethnicity'
                component="select"
                type='input'>
                <option ></option>
                <option value="white">Белый</option>
                <option value="latino">Латиноамериканец</option>
                <option value="asian">Азиат</option>
                <option value="black">Темнокожий</option>
              </Field>
            </div>
          </div>

          <div className={classes.inputWrp}>
            <label className={classes.label}>Настроение аватара:  </label>
            <div>
              <Field
                className={classes.textFieldProfile}
                name='emotion'
                component="select"
                type='input'>
                <option ></option>
                <option value="joy">Радость</option>
                <option value="neutral">Нейтральное</option>
                <option value="surprise">Удивление</option>
              </Field>
            </div>
          </div>

          <div className={classes.inputWrp}>
            <label className={classes.label}>Цвет глаз:  </label>
            <div>
              <Field
                className={classes.textFieldProfile}
                name='eye_color'
                component="select"
                type='input'>
                <option ></option>
                <option value="brown">Карие</option>
                <option value="blue">Голыбые</option>
                <option value="gray">Серые</option>
                <option value="green">Зеленые</option>
              </Field>
            </div>
          </div>

        <div className={classes.inputWrp}>
          <label className={classes.label}>Цвет волос:  </label>
          <div>
            <Field
              className={classes.textFieldProfile}
              name='hair_color'
              component="select"
              type='input'>
              <option ></option>
              <option value="brown">Брюнет</option>
              <option value="blond">Блондин</option>
              <option value="black">Черный</option>
              <option value="gray">Серый</option>
              <option value="red">Рыжий</option>
            </Field>
          </div>
        </div>


          <div className={classes.inputWrp}>
            <label className={classes.label}>Длина волос:  </label>
            <div>
              <Field
                className={classes.textFieldProfile}
                name='hair_length'
                component="select"
                type='input'>
                <option ></option>
                <option value="short">Короткие</option>
                <option value="medium">Средние</option>
                <option value="long">Длинные</option>
              </Field>
            </div>
          </div>

      </div>
        {!props.isAIAvatarGeneratedSucces && props.anyTouched && <span>{props.aVatarNotFoundMsg}</span>}
        <button className={classes.btn}>
          Сгенерировать</button>
      </form>
    </>
  );
}

CreateAIAvatarForm = reduxForm({
  form: 'CreateAIAvatarForm'
})(CreateAIAvatarForm);

export default CreateAIAvatarForm;