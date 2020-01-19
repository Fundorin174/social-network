

export const required = (value) => {
  if (value) {return undefined;}
  return 'Вы не заполнили поле';
}


export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) {return `Максимальная длина сообщения ${maxLength} символов`;}
  return undefined;
}