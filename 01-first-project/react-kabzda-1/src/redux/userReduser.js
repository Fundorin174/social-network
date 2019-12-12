
const FOLLOW = 'FOLLOW',
      UNFOLLOW = 'UNFOLLOW',
      SEARCH_USERS = 'SEARCH_USERS',
      SET_USERS = 'SET_USERS',
      TO_FRIENDS = 'TO_FRIENDS',
      FROM_FRIENDS = 'FROM_FRIENDS';

export const followUserActionCreator = (userID) => (
    {type: FOLLOW, userID}
);

export const unfollowUserActionCreator = (userID) => (
    {type: UNFOLLOW, userID}
);

export const toFriendsActionCreator = (userID) => (
    {type: TO_FRIENDS, userID}
);

export const fromFriendsActionCreator = (userID) => (
    {type: FROM_FRIENDS, userID}
);

export const searchUsersActionCreator = (partOfName) => (
    {type: SEARCH_USERS, partOfName: partOfName}
);
export const setUsersActionCreator = (users) => (
    {type: SET_USERS, users}
);

let initialState = {
    users: [
        {
            id: '1',
            fullName: 'Иванов И',
            follow: true,
            residency: {country: 'Россия', city: 'Воронеж'},            
            status: 'Я зе бест',
            isFrend: false
        }, 
        {
            id: '2',
            fullName: 'Ивановский И',
            follow: false,
            residency: {country: 'Россия', city: 'Москва'},            
            status: 'Столица рулит',
            isFrend: false
        }, 
        {
            id: '3',
            fullName: 'Петров И',
            follow: true,
            residency: {country: 'Россия', city: 'Чита'},
            status: 'Ебеня рулят',
            isFrend: false
        }, 
        {
            id: '4',
            fullName: 'Иванчук В',
            follow: false,
            residency: {country: 'Украина', city: 'Киев'},
            status: 'Даешь перемогу',
            isFrend: true
        }, 
        {
            id: '5',
            fullName: 'Лукашенко А',
            follow: true,
            residency: {country: 'Белоруссия', city: 'Жлобин'},
            status: 'Мы за батьку',
            isFrend: false
        }, 
    ],

    searchUsersText: ''
};


const usersReducer = (state = initialState, action) => {


switch (action.type) {
    case SET_USERS:
            console.log(action.users[0].residency);
            // let stateCopy = ...
        return {...state, users: [...state.users, action.users]}
    
    case FOLLOW:
        return {
            ...state,
            users: state
                .users
                .map((user) => {
                    if (user.id === action.userID) {
                        return {
                            ...user,
                            follow: true
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
                            follow: false
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


        default:
            return state;

    }
}

export default usersReducer;