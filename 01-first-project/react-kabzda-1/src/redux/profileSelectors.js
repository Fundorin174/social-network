
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



