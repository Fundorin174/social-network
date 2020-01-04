const SET_AUTH_DATA = 'SET_AUTH_DATA';

export const authMe = (data) => ({type: SET_AUTH_DATA, data});



let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false

};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_AUTH_DATA:

            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;

    }
}

export default authReducer;