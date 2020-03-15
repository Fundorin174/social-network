
export const getIsAuthSelector = (state) => {
  return state.auth.isAuth
}

export const getAutorizedUserIdSelector = (state) => {
  return state.auth.id
}

export const getAllAuthDataSelector = (state) => {
  return state.auth;
}

export const getCapchaUrlSelector = (state) => {
  return state.auth.capchaUrl
}

export const getIsCaptchaNeededSelector = (state) => {
  return state.auth.isCaptchaNeeded
}