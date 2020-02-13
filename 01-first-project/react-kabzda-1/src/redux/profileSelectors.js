
export const getCurrentProfileSelector = (state) => {
  return state.profilePage.currentProfile;
}

export const getCurrentStatusSelector = (state) => {
  return state.profilePage.currentStatus;
}

export const getPostsSelector = (state) => {
  return state.profilePage.posts;
}

export const getProfileSetErrors = (state) => {
  return state.profilePage.profileSetErrors;
}

export const getloadProfileDataSuccess = (state) => {
  return state.profilePage.loadProfileDataSuccess;
}

export const getIsFaceGeneratedSelector = (state) => {
  return state.profilePage.isFaceGeneratedAvatar;
}

export const getUrlAIGeneratedImageSelector = (state) => {
  return state.profilePage.generatedFaces.faces[0].urls[3][256];
}





