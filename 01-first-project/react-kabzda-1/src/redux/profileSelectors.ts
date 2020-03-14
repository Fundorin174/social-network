import { AppStateType } from "./reduxStore";


export const getCurrentProfileSelector = (state: AppStateType) => {
  return state.profilePage.currentProfile;
}

export const getCurrentStatusSelector = (state: AppStateType) => {
  return state.profilePage.currentStatus;
}

export const getPostsSelector = (state: AppStateType) => {
  return state.profilePage.posts;
}

export const getProfileSetErrors = (state: AppStateType) => {
  return state.profilePage.profileSetErrors;
}

export const getloadProfileDataSuccess = (state: AppStateType) => {
  return state.profilePage.loadProfileDataSuccess;
}

export const getIsAIAvatarGeneratedSucces = (state: AppStateType) => {
  return state.profilePage.isAIAvatarGeneratedSucces;
}

export const getaVatarNotFoundMsgSelector = (state: AppStateType) => {
  return state.profilePage.aVatarNotFoundMsg;
}

export const getUrlAIGeneratedImageSelector = (state: AppStateType) => {
  return state.profilePage.generatedFaces.faces ? state.profilePage.generatedFaces.faces[0].urls[3][256] : null;
}





