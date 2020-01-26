
export const getDialogsSelector = (state) => {
  return state.dialogPage.dialogs
}

export const getMessagesSelector = (state) => {
  return state.dialogPage.messages
}

export const getNewMsgTextelector = (state) => {
  return state.dialogPage.newMsgText
}