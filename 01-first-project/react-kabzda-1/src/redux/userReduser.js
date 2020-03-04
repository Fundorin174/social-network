import { usersAPI } from "./../DAL/api";
import {changeElementInArray} from "../components/common/helpFunctions";

const FOLLOW = 'SOCIAL-NETWORK/USERS/FOLLOW',
    UNFOLLOW = 'SOCIAL-NETWORK/USERS/UNFOLLOW',
    SEARCH_USERS = 'SOCIAL-NETWORK/USERS/SEARCH_USERS',
    SET_USERS = 'SOCIAL-NETWORK/USERS/SET_USERS',
    TO_FRIENDS = 'SOCIAL-NETWORK/USERS/TO_FRIENDS',
    FROM_FRIENDS = 'SOCIAL-NETWORK/USERS/FROM_FRIENDS',
    CHANGE_CURRENT_PAGE = 'SOCIAL-NETWORK/USERS/CHANGE_CURRENT_PAGE',
    NEXT_PAGE = 'SOCIAL-NETWORK/USERS/NEXT_PAGE',
    PREVIOS_PAGE = 'SOCIAL-NETWORK/USERS/PREVIOS_PAGE',
    FIRST_PAGE = 'SOCIAL-NETWORK/USERS/FIRST_PAGE',
    LAST_PAGE = 'SOCIAL-NETWORK/USERS/LAST_PAGE',
    USERS_PER_PAGE = 'SOCIAL-NETWORK/USERS/USERS_PER_PAGE',
    SET_TOTAL_COUNT = 'SOCIAL-NETWORK/USERS/SET_TOTAL_COUNT',
    TOGGLE_IS_LOADING = 'SOCIAL-NETWORK/USERS/TOGGLE_IS_LOADING',
    TOGGLE_FOLLOW_IN_PROGRESS = 'SOCIAL-NETWORK/USERS/TOGGLE_FOLLOW_IN_PROGRESS';

export const toFollow = (userID) => ({type: FOLLOW,
  userID
});
export const toUnfollow = (userID) => ({type: UNFOLLOW, userID});
export const toFriends = (userID) => ({type: TO_FRIENDS, userID});
export const fromFriends = (userID) => ({type: FROM_FRIENDS, userID});
export const searchUsers = (partOfName) => (
    {type: SEARCH_USERS, partOfName: partOfName}
);
export const setUsers = (users) => ({type: SET_USERS, users});
export const changeCurrentPage = (pageNum) => (
    {type: CHANGE_CURRENT_PAGE, pageNum}
);
export const nextPage = () => ({type: NEXT_PAGE});
export const previosPage = () => ({type: PREVIOS_PAGE});
export const firstPage = () => ({type: FIRST_PAGE});
export const isloading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading});
export const lastPage = (pagesCount) => ({type: LAST_PAGE, pagesCount});
export const changeUsersPerPage = (numOfUsers) => (
    {type: USERS_PER_PAGE, numOfUsers}
);
export const setTotalUsersCount = (totalCount) => (
    {type: SET_TOTAL_COUNT, totalCount}
);
export const toggleFollowInProgress = (isFetching, userID) => ({
  type: TOGGLE_FOLLOW_IN_PROGRESS, isFetching, userID
  });
export const getUsers = (currentPage, usersPerPageCount) => async (dispatch) => {
         dispatch(isloading(true));
         let data = await usersAPI.getUsers(currentPage, usersPerPageCount);
             dispatch(isloading(false));
             dispatch(setUsers(data.items));
             dispatch(setTotalUsersCount(data.totalCount));
       };

export const followUnFollowToggle = (dispatch, id, data, followinMethod) => {
  dispatch(toggleFollowInProgress(true, id));
  if (data.resultCode === 0) {followinMethod(id)}
  dispatch(toggleFollowInProgress(false, id));
}

export const follow = (id) => async (dispatch) => {
  let data = await usersAPI.toFollow(id);
  let followinMethod = (id) => {dispatch(toFollow(id))};
  followUnFollowToggle(dispatch, id, data, followinMethod);
};

export const unFollow = (id) => async (dispatch) => {
  let data = await usersAPI.unFollow(id);
  let followinMethod = (id) => {dispatch(toUnfollow(id))};
  followUnFollowToggle(dispatch, id, data, followinMethod);
}




let initialState = {
    users: [],
    searchUsersText: '',
    totalUsersCount: 0,
    usersPerPageCount: 5,
    currentPage: 1,
    lastPage: 5,
    pagesCount: 5,
    isLoading: true,
    followInProgress: []

};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case FOLLOW:
            return {
                ...state,
                users: changeElementInArray(state.users, "id", action.userID, {followed: true})
            }

        case UNFOLLOW:
            return {
                ...state,
              users: changeElementInArray(state.users, "id", action.userID, {followed: false})
            }

        case TO_FRIENDS:
            return {
                ...state,
                users: changeElementInArray(state.users, "id", action.userID, {isFrend: true})
            }

        case FROM_FRIENDS:

            return {
                ...state,
                users: changeElementInArray(state.users, "id", action.userID, {isFrend: false})
            }

        case SEARCH_USERS:

            return {
                ...state,
                searchUsersText: action.partOfName

            }

        case CHANGE_CURRENT_PAGE:

            return {
                ...state,
                currentPage: action.pageNum
            }

        case NEXT_PAGE:

            return {
                ...state,
                currentPage: ++state.currentPage
            }

        case PREVIOS_PAGE:
            if (state.currentPage > 1) {
                return {
                    ...state,
                    currentPage: --state.currentPage
                }
            } else {
                return {
                    ...state,
                    currentPage: state.currentPage
                }

            }

        case FIRST_PAGE:

            return {
                ...state,
                currentPage: 1
            }

        case LAST_PAGE:

            return {
                ...state,
                pagesCount: action.pagesCount,
                currentPage: action.pagesCount

            }

        case USERS_PER_PAGE:
            return {
                ...state,
                usersPerPageCount: action.numOfUsers
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount

            }
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }

            case TOGGLE_FOLLOW_IN_PROGRESS: {
              return {
                  ...state,
                  followInProgress: action.isFetching 
                  ? [...state.followInProgress, action.userID] 
                  : state.followInProgress.filter(id => id !== action.userID)
              }
            }
        default:
            return state;

    }
}

export default usersReducer;