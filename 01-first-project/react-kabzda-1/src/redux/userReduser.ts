import { UserType, UsersType, FollowType } from './../types/types';
import { usersAPI } from "../DAL/api";
import {changeElementInArray} from "../components/common/helpFunctions";
import { Dispatch } from 'redux';
import { AppStateType } from './reduxStore';
import { ThunkAction } from 'redux-thunk';

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

type ToFollowActionType = {
  type: typeof FOLLOW
  userID: number
}

export const toFollow = (userID: number): ToFollowActionType => ({type: FOLLOW,
  userID
});

type UnFollowActionType = {
  type: typeof UNFOLLOW
  userID: number
}

export const toUnfollow = (userID: number): UnFollowActionType => ({type: UNFOLLOW, userID});

type ToFriendsActionType = {
  type: typeof TO_FRIENDS
  userID: number
}
export const toFriends = (userID: number): ToFriendsActionType => ({type: TO_FRIENDS, userID});

type FromFriendsActionType = {
  type: typeof FROM_FRIENDS
  userID: number
}

export const fromFriends = (userID:number): FromFriendsActionType => ({type: FROM_FRIENDS, userID});

type SearchUsersActionType = {
  type: typeof SEARCH_USERS
  partOfName: string
}

export const searchUsers = (partOfName: string): SearchUsersActionType => ({
  type: SEARCH_USERS,
  partOfName: partOfName
});

type SetUsersActionType = {
  type: typeof SET_USERS
  users: Array<UserType>
}

export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users});

type ChangeCurrentPageActionType = {
  type: typeof CHANGE_CURRENT_PAGE
  pageNum: number
}

export const changeCurrentPage = (pageNum: number): ChangeCurrentPageActionType => (
    {type: CHANGE_CURRENT_PAGE, pageNum}
);

type NextPageActionType = {
  type: typeof NEXT_PAGE
}

export const nextPage = (): NextPageActionType => ({type: NEXT_PAGE});

type PreviosPageActionType = {
  type: typeof PREVIOS_PAGE
}

export const previosPage = (): PreviosPageActionType  => ({type: PREVIOS_PAGE});

type FirstPageActionType = {
  type: typeof FIRST_PAGE
}

export const firstPage = (): FirstPageActionType => ({type: FIRST_PAGE});

type IsloadingActionType = {
  type: typeof TOGGLE_IS_LOADING
  isLoading: boolean
}

export const isloading = (isLoading: boolean): IsloadingActionType => ({type: TOGGLE_IS_LOADING, isLoading});

type LastPageActionType = {
  type: typeof LAST_PAGE
  pagesCount: number
}

export const lastPage = (pagesCount: number): LastPageActionType => ({type: LAST_PAGE, pagesCount});

type ChangeUsersPerPageActionType = {
  type: typeof USERS_PER_PAGE
  numOfUsers: number
}

export const changeUsersPerPage = (numOfUsers: number): ChangeUsersPerPageActionType => (
    {type: USERS_PER_PAGE, numOfUsers}
);

type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_COUNT
  totalCount: number
}

export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountActionType => (
    {type: SET_TOTAL_COUNT, totalCount}
);

type ToggleFollowInProgressActionType = {
  type: typeof TOGGLE_FOLLOW_IN_PROGRESS
  isFetching: boolean
  userID: number
}

export const toggleFollowInProgress = (isFetching: boolean, userID: number): ToggleFollowInProgressActionType => ({
  type: TOGGLE_FOLLOW_IN_PROGRESS, isFetching, userID
  });


type ActionType = ToggleFollowInProgressActionType | SetTotalUsersCountActionType | LastPageActionType | ChangeUsersPerPageActionType | IsloadingActionType | FirstPageActionType | PreviosPageActionType | NextPageActionType | ChangeCurrentPageActionType | SetUsersActionType | SearchUsersActionType | FromFriendsActionType | ToFriendsActionType | UnFollowActionType | ToFollowActionType

type StateType = () => AppStateType
type DispatchType = Dispatch<ActionType>

export const getUsers = (currentPage:number, usersPerPageCount:number, term:string | undefined):ThunkAction<Promise<void>, AppStateType, unknown, ActionType> => async (dispatch, getState) => {
         dispatch(isloading(true));
         let data = await usersAPI.getUsers(currentPage, usersPerPageCount, term);
             dispatch(isloading(false));
             dispatch(setUsers(data.items));
             dispatch(setTotalUsersCount(data.totalCount));
       };

export const followUnFollowToggle = (dispatch: DispatchType, getState: StateType, id: number, data: FollowType, followinMethod: FollowinMethodType) => {
  dispatch(toggleFollowInProgress(true, id));
  if (data.resultCode === 0) {followinMethod(id)}
  dispatch(toggleFollowInProgress(false, id));
}

type FollowinMethodType = (id: number) =>void

export const follow = (id:number) => async (dispatch: DispatchType, getState: StateType) => {
  let data = await usersAPI.toFollow(id);
  let followinMethod = (id: number) => {dispatch(toFollow(id))};
  followUnFollowToggle(dispatch, getState, id, data, followinMethod);
};

export const unFollow = (id: number) => async (dispatch: Dispatch<ActionType>, getState: StateType) => {
  let data = await usersAPI.unFollow(id);
  let followinMethod = (id: number) => {dispatch(toUnfollow(id))};
  followUnFollowToggle(dispatch, getState, id, data, followinMethod);
}



let initialState = {
    users: [] as Array<UserType>,
    searchUsersText: '',
    totalUsersCount: 0,
    usersPerPageCount: 5,
    currentPage: 1,
    lastPage: 5,
    pagesCount: 5,
    isLoading: true,
    followInProgress: [] as Array <number>
};

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionType): InitialStateType => {

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