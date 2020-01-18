

export const required = (value) => {

  if (value) return undefined;
  return 'Вы пытаетесь отправить пустое сообщение';

}