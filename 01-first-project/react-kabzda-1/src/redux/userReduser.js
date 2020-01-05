const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SEARCH_USERS = 'SEARCH_USERS',
    SET_USERS = 'SET_USERS',
    TO_FRIENDS = 'TO_FRIENDS',
    FROM_FRIENDS = 'FROM_FRIENDS',
    CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE',
    NEXT_PAGE = 'NEXT_PAGE',
    PREVIOS_PAGE = 'PREVIOS_PAGE',
    FIRST_PAGE = 'FIRST_PAGE',
    LAST_PAGE = 'LAST_PAGE',
    USERS_PER_PAGE = 'USERS_PER_PAGE',
    SET_TOTAL_COUNT = 'SET_TOTAL_COUNT',
    TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

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

let initialState = {
    users: [],

    searchUsersText: '',
    totalUsersCount: 0,
    usersPerPageCount: 5,
    currentPage: 1,
    lastPage: 5,
    pagesCount: 5,
    isLoading: true

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
                users: state
                    .users
                    .map((user) => {
                        if (user.id === action.userID) {
                            return {
                                ...user,
                                followed: true
                            }
                        }
                        return user;
                    })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state
                    .users
                    .map((user) => {
                        if (user.id === action.userID) {
                            return {
                                ...user,
                                followed: false
                            }
                        }
                        return user;
                    })
            }

        case TO_FRIENDS:
            return {
                ...state,
                users: state
                    .users
                    .map((user) => {
                        if (user.id === action.userID) {
                            return {
                                ...user,
                                isFrend: true
                            }
                        }
                        return user;
                    })
            }

        case FROM_FRIENDS:
            return {
                ...state,
                users: state
                    .users
                    .map((user) => {
                        if (user.id === action.userID) {
                            return {
                                ...user,
                                isFrend: false
                            }
                        }
                        return user;
                    })
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
                currentPage: state.currentPage + 1
            }

        case PREVIOS_PAGE:
            if (state.currentPage > 1) {
                return {
                    ...state,
                    currentPage: state.currentPage - 1
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

        default:
            return state;

    }
}

export default usersReducer;