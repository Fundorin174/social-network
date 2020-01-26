import { createSelector } from 'reselect';

export const getUsersSelector = (state) => {
  return state.usersPage.users;
}

export const getSearchUsersTextSelector = (state) => {
  return state.usersPage.searchUsersText;
}


export const getSearchingUsersSelector = createSelector(getSearchUsersTextSelector, getUsersSelector, (searchUsersText, users) => {
  let filteredUsers = users ? users.filter( user => (`${user.name}`.toLowerCase().includes(searchUsersText.toLowerCase()))) : null;
  return filteredUsers;
})



export const getCurrentPageSelector = (state) => {
  return state.usersPage.currentPage
}

export const getUsersPerPageCountSelector = (state) => {
  return state.usersPage.usersPerPageCount
}

export const getTotalUsersCountSelector = (state) => {
  return state.usersPage.totalUsersCount
}

export const getIsLoadingSelector = (state) => {
  return state.usersPage.isLoading
}

export const getFollowInProgressSelector = (state) => {
  return state.usersPage.followInProgress
}


